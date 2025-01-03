"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[5672],{98266:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var s=a(76520),t=a(86070),i=a(20887);const r={title:"Snap package manager in ubuntu discussed",tags:["software-tools"],date:new Date("2021-04-20T23:28:38.000Z"),authors:["dhbalaji"]},o=void 0,l={authorsImageUrls:[void 0]},p=[{value:"Why snap?",id:"why-snap",level:2},{value:"Looks like it&#39;s a win-win, is there any catch?",id:"looks-like-its-a-win-win-is-there-any-catch",level:2},{value:"The difference between snaps and apt packages is not clear yet.",id:"the-difference-between-snaps-and-apt-packages-is-not-clear-yet",level:2},{value:"Are most popular apps already in the snap format",id:"are-most-popular-apps-already-in-the-snap-format",level:2},{value:"One thing to remember",id:"one-thing-to-remember",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"lady-installing-snap-ubuntu",src:a(64677).A+"",width:"1280",height:"853"})}),"\n",(0,t.jsx)(n.p,{children:"Ubuntu software center, Apt, and multiple others ways to install the software in Ubuntu but what is this snap. Looks like it's the new cool. Let's find out more about snap."}),"\n",(0,t.jsx)(n.p,{children:"I want to keep this article short because Wikipedia has discussed at length about snap."}),"\n",(0,t.jsx)(n.h2,{id:"why-snap",children:"Why snap?"}),"\n",(0,t.jsx)(n.p,{children:"When you develop applications, we want to keep the application in such a way it's easy to distribute. In Ubuntu, the applications were built in .deb format which means the apps are packaged in the format which is tied to the distro. For instance, we cannot instance .deb in fedora."}),"\n",(0,t.jsx)(n.p,{children:"With a snap, the software is packaged in such a way the distro dependencies are eliminated. The same snap packages can be installed on different distros by the developer."}),"\n",(0,t.jsx)(n.h2,{id:"looks-like-its-a-win-win-is-there-any-catch",children:"Looks like it's a win-win, is there any catch?"}),"\n",(0,t.jsx)(n.p,{children:"Now the developers have more power to distribute the apps easily on all distros which means a few good and bad things."}),"\n",(0,t.jsx)(n.p,{children:"The good parts are"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Easy to distribute and spread your app"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Monetization is easier because you have a wider audience and your app is not tied to a cross-section of Linux users."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Bugs could be reduced as platform dependencies are reduced."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The bad parts are"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Easy to spread bad apps, malware, miners, etc"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The developer needs to keep things up to date. The distro team has no interference or responsibility to check the package. However, a bot will check the snap for malware, etc but I do not think its fool a proof strategy against attacks that could come through snaps"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"the-difference-between-snaps-and-apt-packages-is-not-clear-yet",children:"The difference between snaps and apt packages is not clear yet."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Snaps are distributed from snap stores but apt packages are distributed from official repositories maintained by the distro team"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Distro team has no say on what app can go into the snap store and which can be installed on the distro later"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Building an app in snap format is less complex compared to other traditional packaging systems. The tool kit involved in developer workflow is different however the archives, package management concepts remain the same."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"snaps carry their dependencies making the apps bulkier but apt packages have shared dependencies"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"snaps are automatically updated but apt packages are manually updated"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the case of both apt and snap, the discretion of the user to choose the developer is required. Some fraud developer can trick the systems"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"are-most-popular-apps-already-in-the-snap-format",children:"Are most popular apps already in the snap format"}),"\n",(0,t.jsxs)(n.p,{children:["Yes, they are in snap format. For instance, the IDE which I am using (Webstorm) is provided by Jetbrains themselves on ",(0,t.jsx)(n.a,{href:"https://snapcraft.io/",children:"snap store website"}),". I am convinced about snap packaging and if I ever launch an app on Ubuntu it would be a snap app. Btw I see some nice shiny apps in the snap store including shareware and trialware."]}),"\n",(0,t.jsx)(n.p,{children:"To know if an app is a snap, do run the command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"whereis webstorm\n"})}),"\n",(0,t.jsx)(n.p,{children:"To see all the snaps"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"snap list\n"})}),"\n",(0,t.jsx)(n.p,{children:"To install a snap"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo snap install packageName\n"})}),"\n",(0,t.jsx)(n.p,{children:"To uninstall a snap"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo snap remove packageName\n"})}),"\n",(0,t.jsx)(n.p,{children:"I do not think you need a command to update snaps, the snap packages are auto-updated."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"snap refresh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Find out more information like build number of app using"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"snap info packageName\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also disable and enable snaps like mobile apps."}),"\n",(0,t.jsx)(n.h2,{id:"one-thing-to-remember",children:"One thing to remember"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Snap is both a command-line interface and an application package format, snaps can be found on snap store"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://snapcraft.io/docs/getting-started",children:"https://snapcraft.io/docs/getting-started"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},64677:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/lady-installing-snap-ubuntu-8f1fb4535ae98d8639aaa30f68a09597.webp"},20887:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var s=a(30758);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}},76520:e=>{e.exports=JSON.parse('{"permalink":"/blog/Snap-package-manager-in-ubuntu-discussed","source":"@site/blog/Snap-package-manager-in-ubuntu-discussed.md","title":"Snap package manager in ubuntu discussed","description":"lady-installing-snap-ubuntu","date":"2021-04-20T23:28:38.000Z","tags":[{"inline":true,"label":"software-tools","permalink":"/blog/tags/software-tools"}],"readingTime":2.99,"hasTruncateMarker":true,"authors":[{"name":"D Balaji","title":"Lead Design Technologist","url":"https://github.com/dhbalaji","imageURL":"https://avatars.githubusercontent.com/u/3672491?v=4","key":"dhbalaji","page":null}],"frontMatter":{"title":"Snap package manager in ubuntu discussed","tags":["software-tools"],"date":"2021-04-20T23:28:38.000Z","authors":["dhbalaji"]},"unlisted":false,"prevItem":{"title":"How do you ensure that the software you develop has less defects?","permalink":"/blog/Do-the-PR-review-the-harder-way-to-reduce-defects"},"nextItem":{"title":"Changing my personal PC operating system to Ubuntu 20.04 LTS & my desk setup","permalink":"/blog/Changing-my-personal-PC-operating-system-to-Ubuntu-20-04-LTS"}}')}}]);