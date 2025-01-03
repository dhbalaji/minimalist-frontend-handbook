"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[7952],{73496:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"Notes/enterprise-react","title":"Enterprise React Notes","description":"Contains notes from my experience and few other courses like Steve Kinney testing course, etc.","source":"@site/docs/Notes/enterprise-react.md","sourceDirName":"Notes","slug":"/Notes/enterprise-react","permalink":"/docs/Notes/enterprise-react","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Enterprise React Notes","sidebar_position":1,"description":"Contains notes from my experience and few other courses like Steve Kinney testing course, etc."},"sidebar":"tutorialSidebar","previous":{"title":"Contact Balaji!","permalink":"/docs/contact"},"next":{"title":"Notes Part 2","permalink":"/docs/Notes/accessibility/notes-contd"}}');var t=i(86070),r=i(20887);const c={title:"Enterprise React Notes",sidebar_position:1,description:"Contains notes from my experience and few other courses like Steve Kinney testing course, etc."},l=void 0,o={},a=[{value:"Principles of a Well-Architected Application",id:"principles-of-a-well-architected-application",level:2},{value:"Sustainable Architecture Components",id:"sustainable-architecture-components",level:2},{value:"Core Technologies",id:"core-technologies",level:2},{value:"Maintainability and Testing",id:"maintainability-and-testing",level:2},{value:"Unit testing",id:"unit-testing",level:3}];function d(e){const n={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s,{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{property:"og:title",content:"Enterprise React Notes"}),(0,t.jsx)("meta",{property:"og:image",content:"/img/docs/react-code.webp"}),(0,t.jsx)("meta",{property:"og:url",content:"http://dhbalaji.dev/docs/Notes/enterprise-react"}),(0,t.jsx)("meta",{property:"og:description",content:"Contains notes from my experience and few other courses like Steve Kinney testing course, etc"}),(0,t.jsx)("meta",{property:"og:type ",content:"article"}),(0,t.jsx)("meta",{name:"twitter:title",content:"Enterprise React Notes"}),(0,t.jsx)("meta",{name:"twitter:image",content:"/img/docs/react-code.webp"}),(0,t.jsx)("meta",{name:"twitter:description",content:"Contains notes from my experience and few other courses like Steve Kinney testing course, etc"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"React Code",src:i(26009).A+"",width:"1280",height:"853"})}),"\n",(0,t.jsx)(n.p,{children:"Enterprise software refers to expansive projects characterized by several key attributes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Scope and Scale:"})," Enterprise software encompasses solutions with significant scope, often transcending the scale of weekend projects."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Longevity:"})," Distinguished by a prolonged lifespan, in contrast to transient weekend endeavors."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Collaborative Development:"})," It involves contributions from multiple developers, incorporating thorough code reviews and safeguarding through extensive test cases."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Evolutionary Development:"})," Typically, it progresses incrementally from prototype to production, adapting to changing requirements."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Infrastructure and Coding Standards:"})," It adheres to specific infrastructure requirements and coding standards to ensure compatibility within the enterprise ecosystem."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Extended Maintenance:"})," Involves a protracted maintenance phase, addressing hidden edge cases and ensuring sustained functionality."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Adaptability:"})," If its lifespan extends, there may be a need for rewriting using a new technology stack."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Alignment with Enterprise Architecture:"})," It seamlessly fits into the enterprise information architecture, incorporating elements such as authentication and authorization."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Automation is paramount in the context of enterprise software development, consistently adhering to rules without succumbing to human emotions or lapses in decision-making."}),"\n",(0,t.jsx)(n.p,{children:"Maintenance of code is a delicate balance, requiring the management of application integrity while enhancing code authored by predecessors over time."}),"\n",(0,t.jsx)(n.p,{children:"Refactoring is the art of modifying code without altering its functionality, and code reviews, though not easily scalable, are critical for ensuring precision and quality, even in the minutest details."}),"\n",(0,t.jsx)(n.h2,{id:"principles-of-a-well-architected-application",children:"Principles of a Well-Architected Application"}),"\n",(0,t.jsx)(n.p,{children:"A well-architected application adheres to a set of principles encompassing various facets:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Testing:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Unit tests"}),"\n",(0,t.jsx)(n.li,{children:"Component tests"}),"\n",(0,t.jsx)(n.li,{children:"Integration tests"}),"\n",(0,t.jsx)(n.li,{children:"End-to-end tests"}),"\n",(0,t.jsx)(n.li,{children:"Smoke tests"}),"\n",(0,t.jsx)(n.li,{children:"Health checks"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Static Analysis:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Typescript analysis"}),"\n",(0,t.jsx)(n.li,{children:"Linting"}),"\n",(0,t.jsx)(n.li,{children:"Code formatting"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Build Process:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Code review checks"}),"\n",(0,t.jsx)(n.li,{children:"Automated checks for the aforementioned points"}),"\n",(0,t.jsx)(n.li,{children:"Continuous Integration/Continuous Deployment (CI/CD) practices"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Separation of Concerns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Business logic isolated from the view layer"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Deployment Infrastructure:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Utilization of CDN"}),"\n",(0,t.jsx)(n.li,{children:"Implementation of edge networks"}),"\n",(0,t.jsx)(n.li,{children:"Integration with cloud services"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Design Processes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Proactive thinking instead of reactive responses"}),"\n",(0,t.jsx)(n.li,{children:"Error reporting as opposed to relying on screenshots"}),"\n",(0,t.jsx)(n.li,{children:"Automatic dependency updates"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Considerations:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Managing technical debt"}),"\n",(0,t.jsx)(n.li,{children:"Evaluating cognitive costs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sustainable-architecture-components",children:"Sustainable Architecture Components"}),"\n",(0,t.jsx)(n.p,{children:"Sustainable architecture is built upon the pillars of:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Patterns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Architectural patterns"}),"\n",(0,t.jsx)(n.li,{children:"State management patterns"}),"\n",(0,t.jsx)(n.li,{children:"Abstraction patterns"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Processes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rigorous code reviews"}),"\n",(0,t.jsx)(n.li,{children:"Blueprints and design documents"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Systems:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Comprehensive testing strategies"}),"\n",(0,t.jsx)(n.li,{children:"Efficient build systems"}),"\n",(0,t.jsx)(n.li,{children:"Robust static analysis"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"core-technologies",children:"Core Technologies"}),"\n",(0,t.jsx)(n.p,{children:"The technology stack comprises:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Typescript"}),"\n",(0,t.jsx)(n.li,{children:"React"}),"\n",(0,t.jsx)(n.li,{children:"Testing library"}),"\n",(0,t.jsx)(n.li,{children:"Vitest"}),"\n",(0,t.jsx)(n.li,{children:"Playwright"}),"\n",(0,t.jsx)(n.li,{children:"GitHub Actions/Jenkins"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Advisory: Pragmatism and realism should take precedence over mere philosophical considerations."}),"\n",(0,t.jsx)(n.h2,{id:"maintainability-and-testing",children:"Maintainability and Testing"}),"\n",(0,t.jsx)(n.p,{children:"The discussion on maintainability and testing is integral:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Unit Tests (Developer Tests):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Swift execution, tied to code or component implementation"}),"\n",(0,t.jsx)(n.li,{children:"Limited confidence in the overall system"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"End-to-End Tests (Real World Tests):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Slower execution, validating the user perspective in the browser"}),"\n",(0,t.jsx)(n.li,{children:"Higher confidence in system behavior"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Integration Tests (Pseudo Real World Tests):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Test parts of systems collectively, with mocks and abstractions"}),"\n",(0,t.jsx)(n.li,{children:"Evaluate interactions among components"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Component Tests (What It Does Tests):"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Pertains to component-based libraries like React"}),"\n",(0,t.jsx)(n.li,{children:"Focuses on specific components and their functionalities"}),"\n",(0,t.jsx)(n.li,{children:"Includes assessments of CSS and visual appearance"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"feedback loop"})," acts as the crucial link connecting developers with test results, ensuring a continuous improvement cycle."]}),"\n",(0,t.jsx)(n.h3,{id:"unit-testing",children:"Unit testing"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Unit testing is first line of defense"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"-- To Be Continued ... --"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},26009:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/react-code-c2ae9d80381f0950d165fa35a1edd77b.webp"},20887:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var s=i(30758);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);