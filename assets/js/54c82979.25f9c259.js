"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[329],{8063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var s=n(1527),o=n(7541);const i={position:1},a="Getting Started",l={id:"getting-started/index",title:"Getting Started",description:"What is FlowGen",source:"@site/docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/tiwater/flowgen/edit/main/website/docs/getting-started/index.md",tags:[],version:"current",lastUpdatedAt:1704700878,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{position:1},sidebar:"guideSidebar",next:{title:"Concepts",permalink:"/concepts"}},r={},h=[{value:"What is FlowGen",id:"what-is-flowgen",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Agent",id:"agent",level:3},{value:"Autoflow",id:"autoflow",level:3},{value:"Chat",id:"chat",level:3},{value:"Autoflow Template",id:"autoflow-template",level:3},{value:"&quot;Hello World&quot;",id:"hello-world",level:2},{value:"Initialize a New Autoflow",id:"initialize-a-new-autoflow",level:3},{value:"Build Your First Autoflow",id:"build-your-first-autoflow",level:3},{value:"Start Chat",id:"start-chat",level:3},{value:"Check Python Code",id:"check-python-code",level:3},{value:"Publish as Template",id:"publish-as-template",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"More Readings",id:"more-readings",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(t.h2,{id:"what-is-flowgen",children:"What is FlowGen"}),"\n",(0,s.jsxs)(t.p,{children:["FlowGen is a tool built for ",(0,s.jsx)(t.a,{href:"https://microsoft.github.io/autogen/",children:"AutoGen"}),", a fantastic agent framework from Microsoft Research."]}),"\n",(0,s.jsx)(t.p,{children:"AutoGen streamlines the process of creating multi-agent applications with its clear and user-friendly approach. FlowGen takes this accessibility a step further by offering visual tools that simplify the building and management of agent workflows."}),"\n",(0,s.jsx)(t.h2,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,s.jsx)(t.h3,{id:"agent",children:"Agent"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Agent"})," is the core concept in AutoGen and FlowGen. For applications, this usually means a ",(0,s.jsx)(t.strong,{children:"ConversableAgent"}),", which includes two types: ",(0,s.jsx)(t.strong,{children:"AssistantAgent"})," and ",(0,s.jsx)(t.strong,{children:"UserProxyAgent"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Assistant Agent"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"AssistantAgent"})," is your go-to helper to accomplish a task\u2014it could be a chatbot, a code generator, or a planner\u2014perhaps even a blend of them."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"UserProxy Agent"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"UserProxyAgent"})," enables interaction with the ",(0,s.jsx)(t.strong,{children:"AssistantAgent"}),". It can take the form of a chatbot, a code executor, or even a human\u2014it's quite the versatile agent."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"autoflow",children:"Autoflow"}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.strong,{children:"Autoflow"})," consists of a network of ",(0,s.jsx)(t.strong,{children:"Agents"}),". It's the foundation of any multi-agent application."]}),"\n",(0,s.jsxs)(t.p,{children:["A standard Autoflow usually includes one ",(0,s.jsx)(t.strong,{children:"UserProxyAgent"})," and one or several ",(0,s.jsx)(t.strong,{children:"AssistantAgents"}),". The ",(0,s.jsx)(t.strong,{children:"UserProxyAgent"})," is your direct line of interaction, while the ",(0,s.jsx)(t.strong,{children:"AssistantAgents"})," work behind the scenes, collaborating to build a robust multi-agent application."]}),"\n",(0,s.jsx)(t.h3,{id:"chat",children:"Chat"}),"\n",(0,s.jsx)(t.p,{children:"Each Chat represents a live session that has been spun up from a Autoflow or a AutoflowTemplate."}),"\n",(0,s.jsx)(t.h3,{id:"autoflow-template",children:"Autoflow Template"}),"\n",(0,s.jsxs)(t.p,{children:["Ready to launch a Autoflow? Publish it as a ",(0,s.jsx)(t.strong,{children:"AutoflowTemplate"})," in the ",(0,s.jsx)(t.a,{href:"https://platform.flowgen.app/templates/",children:"FlowGen Template"}),"! Users can then deploy these templates to conjure up new Autoflows or strike up chats directly on the template itself."]}),"\n",(0,s.jsx)(t.h2,{id:"hello-world",children:'"Hello World"'}),"\n",(0,s.jsx)(t.p,{children:'Let\'s jump straight in and create a simple "Hello World" flow.'}),"\n",(0,s.jsx)(t.h3,{id:"initialize-a-new-autoflow",children:"Initialize a New Autoflow"}),"\n",(0,s.jsxs)(t.p,{children:["Head over to ",(0,s.jsx)(t.a,{href:"https://platform.flowgen.app/auth/login",children:"FlowGen Login"})," and tap ",(0,s.jsx)(t.strong,{children:"Login as Guest"})," for a test run without the need to sign up."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Login",src:n(5017).Z+"",width:"2446",height:"1956"})}),"\n",(0,s.jsx)(t.p,{children:"It's always a good practice to login with your own social ID and create your own Autoflow to play with."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Guest mode means your data is an open book to other guests. Sign in with your GitHub/Google/X account for a private experience."})}),"\n",(0,s.jsxs)(t.p,{children:["Once you're in, go to the ",(0,s.jsx)(t.a,{href:"https://platform.flowgen.app",children:"homepage"})," and hit the ",(0,s.jsx)(t.strong,{children:"Build from Scratch"})," button to weave a new Autoflow."]}),"\n",(0,s.jsx)(t.h3,{id:"build-your-first-autoflow",children:"Build Your First Autoflow"}),"\n",(0,s.jsx)(t.p,{children:"Get started by tidying up the canvas\u2014scrap any sample nodes that are hanging about. Now, let's get crafting:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Tap the plus sign \u2a01 in the top left and ferry over an ",(0,s.jsx)(t.strong,{children:"Assistant Agent"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Next, snag a ",(0,s.jsx)(t.strong,{children:"UserProxy Agent"})," and drop it in place."]}),"\n",(0,s.jsx)(t.li,{children:"Connect these two, and voil\xe0\u2014you've got flow! \ud83d\udd17"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"node",src:n(593).Z+"",width:"2446",height:"1956"})}),"\n",(0,s.jsx)(t.p,{children:"Here\u2019s a visual to guide you through:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"flow",src:n(7669).Z+"",width:"2446",height:"1956"})}),"\n",(0,s.jsx)(t.p,{children:"Some key points to note:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Set ",(0,s.jsx)(t.strong,{children:"Human Input Mode"})," to ",(0,s.jsx)(t.strong,{children:"ALWAYS"}),", so human (you) can always provide feedback."]}),"\n",(0,s.jsxs)(t.li,{children:["Set ",(0,s.jsx)(t.strong,{children:"Max Consecutive Auto-Replies"})," to ",(0,s.jsx)(t.strong,{children:"1"}),", so that if AsssitantAgent provide some code to execute, you can simply press Enter and UserProxyAgent will help to execute the code and send back the result to AssitantAgent. This is exactly what means by ",(0,s.jsx)(t.strong,{children:"Multi-Agent Collaboration"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["A few ",(0,s.jsx)(t.strong,{children:"Sample Messages"})," are provided in Config node. This is a convenient feature for your target users to get started with your Autoflow."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"start-chat",children:"Start Chat"}),"\n",(0,s.jsxs)(t.p,{children:["Fire up your flow by smashing the ",(0,s.jsx)(t.strong,{children:"Start Chat"})," button at the top right. Click one sample message above the Send button and watch the magic unfold in your chat window:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Chat",src:n(564).Z+"",width:"2446",height:"1956"})}),"\n",(0,s.jsxs)(t.p,{children:["We know it's kinda difficult to write the first messages other than 'hi' or 'hello' in a chatbot. As you can see the samples above Send button, So we also provide a ",(0,s.jsx)(t.strong,{children:"Sample Message"})," feature to help you and your users get started. You can pick one to click and send."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Though the user experience looks like a chat app, we need to clarify that multi-agent app is generally for you to solve complicated problems, so it will not get responded as fast as a chat app. You may need to wait for a few seconds or even minutes to get the final answer."})}),"\n",(0,s.jsx)(t.h3,{id:"check-python-code",children:"Check Python Code"}),"\n",(0,s.jsx)(t.p,{children:"For developers who need to dive into more details about what is happening underhood, you can click the Python icon and check the generated Python code:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Python",src:n(2958).Z+"",width:"2446",height:"1956"})}),"\n",(0,s.jsx)(t.p,{children:"In most cases, the generated code has few dependencies other than AutoGen. You can copy and download the code to your local machine and run as norml console program with Python."}),"\n",(0,s.jsx)(t.h3,{id:"publish-as-template",children:"Publish as Template"}),"\n",(0,s.jsxs)(t.p,{children:["If you're happy with your flow, publish it as a template for others to use. On ",(0,s.jsx)(t.a,{href:"https://platform.flowgen.app/flows",children:"Autoflow"})," page you can find your Autoflow to publish:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"flows",src:n(7669).Z+"",width:"2446",height:"1956"})}),"\n",(0,s.jsxs)(t.p,{children:["hit the ",(0,s.jsx)(t.strong,{children:"Publish as Template"})," button at the bottom right of the Autoflow card:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"publish",src:n(4541).Z+"",width:"2446",height:"1956"})}),"\n",(0,s.jsxs)(t.p,{children:["And then you can find your template on ",(0,s.jsx)(t.a,{href:"https://platform.flowgen.app/templates",children:"Template"})," page:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"template",src:n(638).Z+"",width:"2446",height:"1956"})}),"\n",(0,s.jsx)(t.p,{children:"By clicking on the template card, you can view the details of the template:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"template",src:n(638).Z+"",width:"2446",height:"1956"})}),"\n",(0,s.jsxs)(t.p,{children:["The URL of template page is static and public, so you can share it with others to start a chat directly. You can also click the ",(0,s.jsx)(t.strong,{children:"Fork"})," button to build your own Autoflow based on this template."]}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(t.p,{children:"This tutorial provided a concise overview, analogous to an introductory ChatGPT session. The dialog exchange was streamlined \u2013 a single interaction cycle swiftly delivers the intended message, concluding the UserProxyAgent demonstration effectively."}),"\n",(0,s.jsx)(t.p,{children:"Looking ahead, we plan to enhance the functionality, introducing additional features to enrich the user experience. Stay tuned for further developments!"}),"\n",(0,s.jsx)(t.h2,{id:"more-readings",children:"More Readings"}),"\n",(0,s.jsx)(t.p,{children:"Got a taste for FlowGen? Feast on these resources for seconds:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://platform.flowgen.app/templates/",children:"FlowGen Template"}),": Feast your eyes on a buffet of ready-to-serve templates."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.flowgen.app/",children:"FlowGen Documentation"}),": The ultimate guide to becoming a FlowGen whiz."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/tiwater/flowgen",children:"FlowGen GitHub"}),": Peek under the hood at the source code."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://microsoft.github.io/autogen/",children:"AutoGen Documentation"}),": Master the art of AutoGen with this comprehensive tutorial."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/microsoft/autogen/tree/main/notebook",children:"AutoGen Notebook"}),": Dive into Jupyter notebooks showcasing AutoGen's prowess."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},564:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/chat-c3b7ff66d244973287e1fd6afcc88400.png"},7669:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/flow-82312b22ad09575ad452a8f1acfef22f.png"},5017:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/login-c46ca6542bd095ce8ac5cd280c0d7775.png"},593:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/node-843cc3069b2a8ab0aa195eb6d57d2c13.png"},4541:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/publish-as-template-dfcdf8fbb3d4ae683b8c26caabc3cc27.png"},2958:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/python-f6582ad952b924bd52a27516eebe8f8a.png"},638:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/template-6a4a3794e13dd6a339b84160468c9171.png"},7541:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var s=n(959);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);