from datetime import datetime
import json
import os
from typing import Any, Dict, List, Union

from jinja2 import Environment, FileSystemLoader, select_autoescape
from jinja2.ext import do

from .pocketbase_client import PocketBaseClient

# Import models
from ..models import Project, Tool, User

# Set up the Jinja2 environment
env = Environment(
    loader=FileSystemLoader(searchpath=os.path.join(os.getcwd(), "app/", "templates")),
    autoescape=select_autoescape(),
    extensions=[do]
)

class CodegenService:
    def __init__(self, user: User, pocketbase_client: PocketBaseClient):
        self.env = Environment(
            loader=FileSystemLoader(searchpath=os.path.join(os.getcwd(), "app/", "templates")),
            autoescape=select_autoescape(),
            extensions=[do]
        )
        self.user = user
        self.pocketbase_client = pocketbase_client  # Keep an instance of PocketBaseClient

    def project2py(self, project: Project) -> str:
        flow = project.flow
        initializer_node = next((node for node in flow.nodes if node['type'] == 'initializer'), None)
        if not initializer_node:
            raise Exception('No initializer node found. This should be the first node in the flow.')

        # Find the first converser node, which is the only one downstream of the initializer
        first_converser = next((node for node in flow.nodes if any(
            edge['source'] == initializer_node['id'] and edge['target'] == node['id'] for edge in flow.edges
        )), None)

        if not first_converser:
            raise Exception('No converser node found. This should be the second node in the flow.')

        if first_converser['type'] not in {'conversable', 'user', 'assistant'}:
            raise Exception('The first converser node should be the conversable, user, or assistant node.')

        assistant_nodes = [node for node in flow.nodes if node['type'] == 'assistant']
        conversable_nodes = [node for node in flow.nodes if node['type'] == 'conversable']
        user_nodes = [node for node in flow.nodes if node['type'] == 'user']

        initial_chat_targets = [
            {
                'node': node,
                'chat_options': next((edge.get('data') for edge in flow.edges if edge['source'] == first_converser['id'] and edge['target'] == node['id']), None)
            }
            for node in flow.nodes if any(edge['source'] == first_converser['id'] and edge['target'] == node['id'] for edge in flow.edges)
        ]

        group_chat_node = next((node for node in flow.nodes if node['type'] == 'groupchat'), None)
        grouped_nodes = []
        if group_chat_node:
            grouped_nodes = [node for node in flow.nodes if node.get('parentId') == group_chat_node['id']]

        note_nodes = [node for node in flow.nodes if node['type'] == 'note']

        settings = self.pocketbase_client.get_settings(self.user)
        for model in settings.get('models', []):
            if 'id' in model:
                del model['id']
            if 'description' in model:
                del model['description']
        # Use the template for each node
        template = self.env.get_template("main.j2")  # Main template

        code = template.render(project=project,
                               settings=settings, # Account level settings include models, etc.
                               nodes=flow.nodes,
                               first_converser=first_converser,
                               initial_chat_targets=initial_chat_targets,
                               assistant_nodes=assistant_nodes,
                               conversable_nodes=conversable_nodes,
                               user_nodes=user_nodes,
                               generation_date=datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                               note_nodes=note_nodes,
                               tools=project.tools,
                               group_chat_node=group_chat_node,
                               grouped_nodes=grouped_nodes)

        return code

    def tool2py(self, tool: Tool) -> json:
        """Generate code based on the provided function meta information.

        Args:
            tool (Tool): Tool meta, such as name, description, parameters etc.

        Returns:
            json: Generated function code in JSON format.
        """
        import openai
        from openai import OpenAI

        client = OpenAI()
        client.api_key = os.environ['OPENAI_API_KEY']

        # Create the prompt with detailed parameter information
        prompt = "Create a Python function as one text string based on the following information, provide the result in JSON format {name, description, code}"
        prompt += f"the 'code' field should only include the function body and should not include the function name and parameters \n\n"
        prompt += f"Function Name: {tool.name}\n"
        prompt += f"Description: {tool.description}\n"
        prompt += f"Parameters:\n"

        for param in tool.parameters:
            prompt += f"- {param.name} ({param.type}): {param.description}\n"

        prompt += "\nPython Function:\n"

        # Now call the OpenAI API with this prompt
        try:
            response = client.chat.completions.create(
                messages=[
                    {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
                    {
                        "role": "user",
                        "content": prompt,
                    }
                ],
                response_format={"type": "json_object"},
                model="gpt-4o",
            )

            # Print the generated code
            generated_code = response.choices[0].message.content
            return json.loads(generated_code)
        except openai.APIStatusError as e:
            print(f"Error: {e}")

# Example usage
if __name__ == '__main__':
    service = CodegenService()

    tool_data = {
        'name': 'run_python',
        'description': 'run the provided python code with ipython',
        'parameters': [
            {
                'name': 'code',
                'description': 'the python code to be run',
                'type': 'string',
            }
        ],
    }

    generated_code = service.tool2py(tool_data)
    print(generated_code)