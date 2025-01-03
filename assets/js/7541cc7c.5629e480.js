"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[1750],{51420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var i=t(34658),a=t(86070),s=t(20887);const o={title:"Perils of updating npm libs & our safety net",tags:["frontend"],date:new Date("2022-01-22T18:19:29.000Z"),authors:["dhbalaji"]},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"What are <code>npm-packages</code>?",id:"what-are-npm-packages",level:2},{value:"Best practices while working with dependent npm-packages",id:"best-practices-while-working-with-dependent-npm-packages",level:2},{value:"Npm update on the command line",id:"npm-update-on-the-command-line",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Do npm update",src:t(69859).A+"",width:"716",height:"281"})}),"\n",(0,a.jsxs)(n.p,{children:["As a senior developer or an architect, one of the job demands would be to update the ",(0,a.jsx)(n.code,{children:"npm-packages"})," of your application. Ironically there is no one single command which would start the update and end the update with all finesse and grace the application would need. here are a few lessons from my job on updating npm packages."]}),"\n",(0,a.jsxs)(n.h2,{id:"what-are-npm-packages",children:["What are ",(0,a.jsx)(n.code,{children:"npm-packages"}),"?"]}),"\n",(0,a.jsx)(n.p,{children:"The javascript code is organized into modules. The modules can be reused, across the org or the community. Then with the birth of npm and GitHub. the open-source synergies got together. we got focussed, functional and well-engineered Javascript modules packaged as npm packages."}),"\n",(0,a.jsxs)(n.p,{children:["the package is slightly different from a module. The npm package has a couple of obligatory files like ",(0,a.jsx)(n.code,{children:"package.json"}),", sticks to a particular format like common, etc."]}),"\n",(0,a.jsx)(n.p,{children:"The npm package has a bunch of identifiers"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"a unique name"}),"\n",(0,a.jsx)(n.li,{children:"a version number"}),"\n",(0,a.jsx)(n.li,{children:"a sha id associated with the release"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Each of the above identifiers serves a purpose. The unique name is for identifying the package among the crowd of packages. The version number aka ",(0,a.jsx)(n.code,{children:"semver"})," number is for release management. The sha id ensures the integrity of the bundle and ensures it's not tampered with malicious intent."]}),"\n",(0,a.jsx)(n.h2,{id:"best-practices-while-working-with-dependent-npm-packages",children:"Best practices while working with dependent npm-packages"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Updates are easy but upgrades are risky. But even a simple npm install could break the application when one dependency pulls the package out of the npm or a corrupt version takes the seat."}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["We need to appreciate what the tools like ",(0,a.jsx)(n.code,{children:"npm"})," already give us. Things like","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"^"})," for compatible changes only, suites well-established packages which pass through alpha, beta, and RC"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"~"})," for close-to changes only, suites for semi-popular packages"]}),"\n",(0,a.jsx)(n.li,{children:"defined version for a package you found with little to low activity and maintained by solo developers. The chances of the solo developer making a breaking change are high due to a lack of review."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"*"})," do not use it"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"npm i"})," and we need to check and assign ",(0,a.jsx)(n.code,{children:"^ ~"})," or the absence of the prefixes."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"The semver numbers need to be taken with a pinch of salt. They are a guideline but nothing stops the developer from accidentally pushing a change that breaks the contract established by the previous version."}),"\n",(0,a.jsxs)(n.li,{children:["Updates not performed over time are a ",(0,a.jsx)(n.code,{children:"tech debt"}),". Not every team or product has the luxury to be debt-free. It is okay to live with debt unless the team is excited to be cutting edge (which happens all the time, it is hard to hire good talent for old tech) or the business is losing something significant."]}),"\n",(0,a.jsxs)(n.li,{children:["Before updating npm packages, I would look at 2 important pieces of the problem.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"application performance & integrity"}),"\n",(0,a.jsx)(n.li,{children:"developer experience"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"I would not shake up dependencies and dev dependencies on the same day."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"CI or continuous integration should check if the app dependencies are available (on a new network) and the app can start once the code leaves the developer machine."}),"\n",(0,a.jsxs)(n.li,{children:["When the package has a version like ",(0,a.jsx)(n.code,{children:"^16.1.0"}),", and you do ",(0,a.jsx)(n.code,{children:"npm i"})," you may get ",(0,a.jsx)(n.code,{children:"16.8.0"})," installed. That is risky because we invited 7 minor changes to API in our code base. In this case, it's better to stick with a defined version."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"npm-update-on-the-command-line",children:"Npm update on the command line"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"npm outdated"}),", pick the number you want to upgrade or update to."]}),"\n",(0,a.jsx)(n.li,{children:"Pick one package at a time unless the use case like babel upgrade demands multi-package updates at the same time"}),"\n",(0,a.jsxs)(n.li,{children:["update the number on package JSON (defined version instead of ",(0,a.jsx)(n.code,{children:"^"}),")"]}),"\n",(0,a.jsx)(n.li,{children:"Run the application, check if the scope, test cases, and other CI passes through."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Other tools like ",(0,a.jsx)(n.code,{children:"npm-check-update"})," or ",(0,a.jsx)(n.code,{children:"renovate"})," speed up the risky process. Updating packages is best when done slowly with some operating procedures. I have broken my blog many times because of speedy npm-package upgrades/updates."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Keep the update activity known only to your local machine. You have a lot of time to investigate if things go bad. Downtime of dev or Jenkins build would raise a flag in some dev teams."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},69859:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/npm-update-647400eced8491f97090e04f6c42924c.webp"},20887:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(30758);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}},34658:e=>{e.exports=JSON.parse('{"permalink":"/blog/Perils-of-updating-npm-libs-our-safety-net","source":"@site/blog/Perils-of-updating-npm-libs-our-safety-net.md","title":"Perils of updating npm libs & our safety net","description":"Do npm update","date":"2022-01-22T18:19:29.000Z","tags":[{"inline":true,"label":"frontend","permalink":"/blog/tags/frontend"}],"readingTime":3.5,"hasTruncateMarker":true,"authors":[{"name":"D Balaji","title":"Lead Design Technologist","url":"https://github.com/dhbalaji","imageURL":"https://avatars.githubusercontent.com/u/3672491?v=4","key":"dhbalaji","page":null}],"frontMatter":{"title":"Perils of updating npm libs & our safety net","tags":["frontend"],"date":"2022-01-22T18:19:29.000Z","authors":["dhbalaji"]},"unlisted":false,"prevItem":{"title":"Finding inspiration for mid-level developers online","permalink":"/blog/Finding-inspiration-for-mid-level-developers-online"},"nextItem":{"title":"Experience with magzter subscription in India 2022","permalink":"/blog/Experience-with-magzter-subscription-in-India-2022"}}')}}]);