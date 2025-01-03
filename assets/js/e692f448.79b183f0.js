"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[8253],{52480:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var n=a(58848),i=a(86070),s=a(20887);const o={title:"Horizontal vs vertical scaling and CAP theorom",tags:["performance-eng"],date:new Date("2021-03-17T12:27:51.000Z"),authors:["dhbalaji"]},r=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Which is better, building scaled software or building software that can scale?",id:"which-is-better-building-scaled-software-or-building-software-that-can-scale",level:2},{value:"Whats vertical scaling",id:"whats-vertical-scaling",level:2},{value:"What about horizontal scaling",id:"what-about-horizontal-scaling",level:2},{value:"Is horizontal and vertical scaling relevant in the cloud",id:"is-horizontal-and-vertical-scaling-relevant-in-the-cloud",level:2},{value:"What is the CAP theorem",id:"what-is-the-cap-theorem",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Some alt text",src:a(56268).A+"",width:"1280",height:"853"})}),"\n",(0,i.jsx)(t.p,{children:"Scaling software is managers pride and engineers headache, Just kidding. Scaling software is a discipline in performance engineering where the software is unable to work normally due to resource constraints arising due to high workload. Let's discuss scaling techniques in detail."}),"\n",(0,i.jsx)(t.h2,{id:"which-is-better-building-scaled-software-or-building-software-that-can-scale",children:"Which is better, building scaled software or building software that can scale?"}),"\n",(0,i.jsx)(t.p,{children:"I was fortunate to work in both scenarios. Let me explain a little deeper."}),"\n",(0,i.jsx)(t.p,{children:"Scenario A: Software house decides to build a well-scaled product from day 1."}),"\n",(0,i.jsx)(t.p,{children:"Scenario B: Software house decides to build software that has the potential to scale when the demand arises."}),"\n",(0,i.jsx)(t.p,{children:"Now let's do the cost-benefit analysis in software terms"}),"\n",(0,i.jsx)(t.p,{children:"time: scenario A will take a longer time because the team tries to build a perfectly scaled app. The capacity or load testing is driving more load to the app with bots regularly to check if the app can handle the expected load. scenario B is quicker to complete."}),"\n",(0,i.jsx)(t.p,{children:"scope: Scenario B has a more relevant scope than the synthetic scope induced in scenario A. The more synthetic scope is a risk for startups and manageable for existing products or migration projects."}),"\n",(0,i.jsx)(t.p,{children:"budget: Scenario A has more fixed costs since the beginning. Scenario B has elastic costs based on how the software performs in the real world."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Building products that have the potential to scale is a nice way to reduce software wastage. Software waste means the software that nobody buys or uses or sometimes never shipped."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"whats-vertical-scaling",children:"Whats vertical scaling"}),"\n",(0,i.jsx)(t.p,{children:"Imagine you had a normal individual house in India. The house occupied most of the land. To increase the capacity of the house, you have to build more rooms on the terrace and grow vertically."}),"\n",(0,i.jsx)(t.p,{children:"In the world of infrastructure, the infrastructure is given a boost by replacing parts of the hardware with more capacity like more CPU cores, more RAM, etc. But after a point, we cannot scale it any further because of limitations. The risk of failure is high in vertical scaling."}),"\n",(0,i.jsx)(t.h2,{id:"what-about-horizontal-scaling",children:"What about horizontal scaling"}),"\n",(0,i.jsx)(t.p,{children:"Getting back to house example, to horizontally scale a house is to buy the house next door and use it for our purpose. Now you have 2 separate houses under your control."}),"\n",(0,i.jsx)(t.p,{children:"In infrastructure, horizontal scaling is about adding more units of physical servers to handle the load. Horizontal scaling is a preferred technique because if one server fails, the others are still operational."}),"\n",(0,i.jsx)(t.p,{children:"The software packaging and distribution is complex in horizontal scaling when compared to vertical scaling. Imagine a web application running on separate servers, we need a load balancer to distribute the workload. We also need to keep databases in sync."}),"\n",(0,i.jsx)(t.h2,{id:"is-horizontal-and-vertical-scaling-relevant-in-the-cloud",children:"Is horizontal and vertical scaling relevant in the cloud"}),"\n",(0,i.jsx)(t.p,{children:"yes, it's relevant."}),"\n",(0,i.jsx)(t.h2,{id:"what-is-the-cap-theorem",children:"What is the CAP theorem"}),"\n",(0,i.jsx)(t.p,{children:"CAP theorem is mostly associated with distributed databases that store data on more than one computer or node. The data is getting persisted almost randomly onto the nodes by the user. Such a system cannot guarantee all the three"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Consistency - means the data is the same on all nodes"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Availability - means the system can return any data without a downtime"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Partition tolerance - the system continues to operate despite data loss that can arise due to network partition."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The CAP theorem says any distributed database can have CA, AP, or CP but never all the three"}),"\n",(0,i.jsx)(t.p,{children:"CA - SQL databases"}),"\n",(0,i.jsx)(t.p,{children:"CP - Cassandra, CouchDB"}),"\n",(0,i.jsx)(t.p,{children:"AP - NoSQL datastores"}),"\n",(0,i.jsxs)(t.p,{children:["read more at ",(0,i.jsx)(t.a,{href:"https://dzone.com/articles/quick-notes-what-cap-theorem#",children:"https://dzone.com/articles/quick-notes-what-cap-theorem#"})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},56268:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/scaling-plants-b0521f279fdbacc9653e0982756eca52.webp"},20887:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var n=a(30758);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}},58848:e=>{e.exports=JSON.parse('{"permalink":"/blog/Horizontal-vs-vertical-scaling-and-CAP-theorom","source":"@site/blog/Horizontal-vs-vertical-scaling-and-CAP-theorom.md","title":"Horizontal vs vertical scaling and CAP theorom","description":"Some alt text","date":"2021-03-17T12:27:51.000Z","tags":[{"inline":true,"label":"performance-eng","permalink":"/blog/tags/performance-eng"}],"readingTime":2.925,"hasTruncateMarker":true,"authors":[{"name":"D Balaji","title":"Lead Design Technologist","url":"https://github.com/dhbalaji","imageURL":"https://avatars.githubusercontent.com/u/3672491?v=4","key":"dhbalaji","page":null}],"frontMatter":{"title":"Horizontal vs vertical scaling and CAP theorom","tags":["performance-eng"],"date":"2021-03-17T12:27:51.000Z","authors":["dhbalaji"]},"unlisted":false,"prevItem":{"title":"Syllabus for senior frontend dev in 2021","permalink":"/blog/Syllabus-for-modern-senior-frontend-dev-2021"},"nextItem":{"title":"Health tips for software teams, that does not cost anything to the firm.","permalink":"/blog/Health-tips-for-software-teams-that-does-not-cost-anything"}}')}}]);