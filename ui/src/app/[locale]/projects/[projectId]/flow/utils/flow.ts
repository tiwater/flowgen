import AssistantAgent from '../components/node/Assistant';
import UserProxyAgent from '../components/node/User';
import GroupChat from '../components/node/GroupChat';
import Note from '../components/node/Note';
import {
  RiEyeLine,
  RiGroupLine,
  RiMetaLine,
  RiOpenaiFill,
  RiRobot2Line,
  RiRobotLine,
  RiStickyNoteLine,
  RiUser4Line,
  RiUser5Line,
  RiUserSearchLine,
  RiSpaceShipLine,
} from 'react-icons/ri';
import { Edge, Node, ReactFlowInstance } from 'reactflow';
import { genId } from '@/utils/id';
import ConversableAgent from '../components/node/ConversableAgent';
import { ComponentType } from 'react';
import Initializer from '../components/node/Initializer';
import ConverseEdge from '../components/edge/ConverseEdge';

export const nodeTypes = {
  initializer: Initializer,
  assistant: AssistantAgent,
  user: UserProxyAgent,
  groupchat: GroupChat,
  note: Note,
  conversable: ConversableAgent,
};

export const edgeTypes = {
  converse: ConverseEdge,
};

export const isConversable = (node?: Node) =>
  node?.type &&
  ['assistant', 'user', 'conversable', 'groupchat'].includes(node.type);

// Fields of Node Meta:
// - name: To be used as variable name in generated code
// - label: Shown on UI, the value is the key for i18n
// - type: 'assistant' | 'user' | 'group', indicates the classes for code generation
// - class: The class to be choosen during code generation
// - (description): UI will look for value of label + '-description', for example 'assistant-description'
export type NodeMeta = {
  id?: string;
  name: string;
  description?: string;
  icon?: ComponentType;
  type: string;
  label: string;
  class: string;
};

export const basicNodes: NodeMeta[] = [
  {
    id: 'initializer',
    icon: RiSpaceShipLine,
    name: 'Initializer',
    label: 'initializer',
    type: 'initializer',
    class: 'Initializer',
  },
  {
    id: 'groupchat',
    icon: RiGroupLine,
    type: 'groupchat',
    name: 'GroupChat',
    label: 'groupchat',
    class: 'GroupChat',
  },
  {
    id: 'note',
    icon: RiStickyNoteLine,
    name: 'Note',
    label: 'note',
    type: 'note',
    class: 'Note',
  },
];

export const agentNodes: NodeMeta[] = [
  {
    id: 'user',
    icon: RiUser5Line,
    name: 'User',
    label: 'user',
    type: 'user',
    class: 'UserProxyAgent',
  },
  {
    id: 'assistant',
    icon: RiRobot2Line,
    name: 'Assistant',
    label: 'assistant',
    type: 'assistant',
    class: 'AssistantAgent',
  },
  {
    id: 'conversable_agent',
    icon: RiRobotLine,
    name: 'ConversableAgent',
    label: 'conversable-agent',
    type: 'conversable',
    class: 'ConversableAgent',
  },
];

export const advancedNodes: NodeMeta[] = [
  {
    id: 'gpt_assistant',
    icon: RiOpenaiFill,
    name: 'GPTAssistant',
    label: 'gpt-assistant',
    type: 'assistant',
    class: 'GPTAssistantAgent',
  },
  {
    id: 'multimodal',
    icon: RiEyeLine,
    name: 'MultimodalAssistant',
    label: 'multimodal-assistant',
    type: 'assistant',
    class: 'MultimodalConversableAgent',
  },
  {
    id: 'llava',
    icon: RiMetaLine,
    name: 'LLaVA',
    label: 'llava',
    type: 'assistant',
    class: 'LLaVAAgent',
  },
  {
    id: 'retrieve_assistant',
    icon: RiRobot2Line,
    name: 'RetrieveAssistant',
    label: 'retrieve-assistant',
    type: 'assistant',
    class: 'RetrieveAssistantAgent',
  },
  {
    id: 'retrieve_user_proxy',
    icon: RiUserSearchLine,
    name: 'RetrieveUserProxy',
    label: 'retrieve-user',
    type: 'user',
    class: 'RetrieveUserProxyAgent',
  },
  {
    id: 'math_user_proxy',
    icon: RiUser4Line,
    name: 'MathUserProxyAgent',
    label: 'math-user',
    type: 'user',
    class: 'MathUserProxyAgent',
  },
];

export const getNodeLabel = (label: string, tNodeMeta: any) => {
  // t() function is hook-based, so here the caller from component should pass in the function
  return tNodeMeta && label ? tNodeMeta(label) : label;
};

// ---------------------

export const initialNodes: Node[] = [
  {
    id: '1001',
    type: 'initializer',
    data: {
      name: 'Initializer',
      label: 'initializer',
      class: 'Initializer',
    },
    position: { x: 150, y: 300 },
  },
  {
    id: '3',
    type: 'user',
    data: {
      name: 'User',
      label: 'user',
      class: 'UserProxyAgent',
      human_input_mode: 'NEVER',
      max_consecutive_auto_reply: 0,
    },
    position: { x: 550, y: 300 },
  },
  {
    id: '1',
    type: 'assistant',
    data: {
      name: 'Image',
      type: 'assistant',
      label: 'multimodal-assistant',
      class: 'MultimodalConversableAgent',
      max_consecutive_auto_reply: 10,
    },
    position: { x: 145, y: 360 },
  },
  {
    id: '998',
    type: 'note',
    data: {
      name: 'Note',
      label: 'note',
      class: 'Note',
      content:
        'Click **Start Chat** and select a sample picture and then enter: What is this?',
    },
    position: { x: 150, y: 700 },
  },
  {
    id: '999',
    type: 'config',
    data: {
      name: 'Config',
      label: 'config',
      flow_name: 'sample-flow1',
      flow_description: 'Sample Workflow',
      class: 'Config',
      max_tokens: 1024,
      temperature: 0.5,
    },
    position: { x: -200, y: 560 },
  },
];

export const initialEdges: Edge[] = [
  {
    id: '1-3',
    source: '1',
    target: '3',
    animated: true,
    style: {
      strokeWidth: 2,
    },
  },
];

export const setNodeData = (
  instance: ReactFlowInstance,
  id: string,
  dataset: { [key: string]: any },
  scope: string = ''
) => {
  const nodes = instance.getNodes();
  instance.setNodes(
    nodes.map((node: any) => {
      if (node.id === id) {
        if (scope) {
          node.data = {
            ...node.data,
            [scope]: { ...node.data[scope], ...dataset },
          };
        } else node.data = { ...node.data, ...dataset };
      }
      return node;
    })
  );
};

export const setEdgeData = (
  instance: ReactFlowInstance,
  id: string,
  dataset: { [key: string]: any },
  scope: string = ''
) => {
  const edges = instance.getEdges();
  instance.setEdges(
    edges.map((edge: any) => {
      if (edge.id === id) {
        if (scope) {
          edge.data = {
            ...edge.data,
            [scope]: { ...edge.data[scope], ...dataset },
          };
        } else edge.data = { ...edge.data, ...dataset };
      }
      return edge;
    })
  );
};

export const getFlowName = (nodes: Node[]) => {
  const configNode = nodes.find((node: any) => node.type === 'config');
  let name = 'flow-unknown';
  if (configNode && configNode?.data.flow_name) {
    name = configNode.data.flow_name;
  } else {
    name = 'flow-' + genId();
  }
  return name;
};

export const getFlowDescription = (nodes: Node[]) => {
  const configNode = nodes.find((node: any) => node.type === 'config');
  let description = '';
  if (configNode && configNode?.data.flow_description) {
    description = configNode.data.flow_description;
  }
  return description;
};

export const isFlowDirty = (flow1: any, flow2: any) =>
  !deepEqual(flow1, flow2, ['selected', 'dragging']);

export function deepEqual(obj1: any, obj2: any, ignoreKeys: string[] = []) {
  if (obj1 === obj2) {
    return true;
  }

  const keys1 = Object.keys(obj1).filter(key => !ignoreKeys.includes(key));
  const keys2 = Object.keys(obj2).filter(key => !ignoreKeys.includes(key));

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2, ignoreKeys)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object: any) {
  return object != null && typeof object === 'object';
}