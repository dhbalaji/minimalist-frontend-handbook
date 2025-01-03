"use strict";(self.webpackChunkblog2=self.webpackChunkblog2||[]).push([[8607],{78408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>n,toc:()=>c});var n=a(7820),o=a(86070),s=a(20887);const d={title:"Why & how to mock date methods in JEST unit tests",tags:["frontend"],date:new Date("2022-10-23T23:22:36.000Z"),authors:["dhbalaji"]},i=void 0,r={authorsImageUrls:[void 0]},c=[{value:"What are the <code>Date</code> methods?",id:"what-are-the-date-methods",level:2},{value:"Why is testing Dates tricky?",id:"why-is-testing-dates-tricky",level:2},{value:"How to make dynamic date logic predictable?",id:"how-to-make-dynamic-date-logic-predictable",level:2},{value:"Downsides to this approach",id:"downsides-to-this-approach",level:2},{value:"References",id:"references",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.h2,{id:"what-are-the-date-methods",children:["What are the ",(0,o.jsx)(t.code,{children:"Date"})," methods?"]}),"\n",(0,o.jsxs)(t.p,{children:["I have worked with a bunch of web apps and all of them have date-related code in common. The Date utils are written in plain Javascript using the ",(0,o.jsx)(t.code,{children:"Date"})," constructor."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"var date = new Date()\n\n// Sample date methods\ndate.getMonth()\ndate.getFullYear()\ndate.getDate()\n"})}),"\n",(0,o.jsx)(t.p,{children:"I have also worked on issues where the test suite would pass correctly on the day the tests were authored but they would fail on the other day or in the server. This is because the dates are getting dynamically generated in the test but the matcher value is static."}),"\n",(0,o.jsx)(t.h2,{id:"why-is-testing-dates-tricky",children:"Why is testing Dates tricky?"}),"\n",(0,o.jsx)(t.p,{children:"You cannot assert a dynamically generated date. For instance, if your date until returns a new date by applying some logic. You cannot put a test that looks like this."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'// WRONG code, don\'t use without mocking date.getDate\n\nexpect(add2DaysToCurrentDate()).toBe("Some hard coded date")\n'})}),"\n",(0,o.jsxs)(t.p,{children:["If you want to use a hardcoded date, you should be able to control the output of the ",(0,o.jsx)(t.code,{children:"add2DaysToCurrentDate"})," method."]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-make-dynamic-date-logic-predictable",children:"How to make dynamic date logic predictable?"}),"\n",(0,o.jsxs)(t.p,{children:["The short answer is ",(0,o.jsx)(t.code,{children:"JEST mocks"}),". Whenever we want to add 2 days to the current date, we need to ensure the ",(0,o.jsx)(t.code,{children:"date.getDate()"})," method returns the same value, then we can write a test to assert the returned value."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'it("should return new Date which is two days ahead of today", function() {\n  jest.spyOn(Date, "getDate").mockImplementation(() => 14) // Mocks the getDate method until this test block\n  expect(add2DaysToCurrentDate()).toBe("Some hard coded date")\n})\n'})}),"\n",(0,o.jsx)(t.h2,{id:"downsides-to-this-approach",children:"Downsides to this approach"}),"\n",(0,o.jsxs)(t.p,{children:["As I mentioned in the comment, till the end of the test block, we cannot use ",(0,o.jsx)(t.code,{children:"date.getDate()"})," as if it's a real function. The mock will replace the actual function call in the test block. This might hinder your assertion logic. We need to plan accordingly."]}),"\n",(0,o.jsx)(t.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://stackoverflow.com/questions/29719631/how-do-i-set-a-mock-date-in-jest",children:"https://stackoverflow.com/questions/29719631/how-do-i-set-a-mock-date-in-jest"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},20887:(e,t,a)=>{a.d(t,{R:()=>d,x:()=>i});var n=a(30758);const o={},s=n.createContext(o);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(s.Provider,{value:t},e.children)}},7820:e=>{e.exports=JSON.parse('{"permalink":"/blog/mocking-dates-in-jest","source":"@site/blog/mocking-dates-in-jest.md","title":"Why & how to mock date methods in JEST unit tests","description":"What are the Date methods?","date":"2022-10-23T23:22:36.000Z","tags":[{"inline":true,"label":"frontend","permalink":"/blog/tags/frontend"}],"readingTime":1.52,"hasTruncateMarker":false,"authors":[{"name":"D Balaji","title":"Lead Design Technologist","url":"https://github.com/dhbalaji","imageURL":"https://avatars.githubusercontent.com/u/3672491?v=4","key":"dhbalaji","page":null}],"frontMatter":{"title":"Why & how to mock date methods in JEST unit tests","tags":["frontend"],"date":"2022-10-23T23:22:36.000Z","authors":["dhbalaji"]},"unlisted":false,"prevItem":{"title":"How to fix, external dvd drive not working on windows 10","permalink":"/blog/External-dvd-drive-wont-show-win10"},"nextItem":{"title":"Turborepo npm workspaces vite react module resolution error resolved","permalink":"/blog/turborepo-vite-react-module-not-found-issue-resolution"}}')}}]);