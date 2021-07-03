(this["webpackJsonptracker-app"]=this["webpackJsonptracker-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(7),s=a.n(r),l=(a(14),a(8)),i=a(2),j=a(3),b=a(0);function o(){return Object(b.jsxs)("header",{className:"flex items-center justify-between p-8",children:[Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)("span",{role:"img","aria-label":"Clock",className:"text-4xl",children:"\ud83d\udd51"}),Object(b.jsx)("p",{className:"ml-4 font-mono text-2xl font-bold",children:"Time Tracker App"})]}),Object(b.jsx)("a",{className:"text-xl underline hover:no-underline",href:"../",children:"Back to other implementations"})]})}var u=a(9),d=["variant","children"],x={start:"bg-yellow-500 hover:bg-yellow-600",stop:"bg-red-500 hover:bg-red-600"},O=n.a.forwardRef((function(e,t){var a=e.variant,c=void 0===a?"start":a,n=(e.children,Object(u.a)(e,d));return Object(b.jsx)("button",Object(i.a)(Object(i.a)({ref:t,className:"py-4 px-8  text-gray-100 font-bold text-xl "+x[c]},n),{},{children:"start"===c?"Start tracking":"Stop tracking"}))}));function f(e,t){var a=Object(c.useRef)();Object(c.useEffect)((function(){a.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}var h=function(e){return Math.floor(e/1e3%60).toString().padStart(2,"0")},p=function(e){return Math.floor(e/6e4%60).toString().padStart(2,"0")},m=function(e){return Math.floor(e/36e5).toString().padStart(2,"0")};function g(e){var t=e.isTracking,a=e.saveData,n=Object(c.useState)(0),r=Object(j.a)(n,2),s=r[0],l=r[1],i=Object(c.useState)(null),o=Object(j.a)(i,2),u=o[0],d=o[1],x=Object(c.useRef)(0);return Object(c.useEffect)((function(){x.current=s})),f((function(){t&&l(s+1e3)}),u),Object(c.useEffect)((function(){return t?(l(0),void d(1e3)):(d(null),void a(x.current))}),[t,a]),Object(b.jsxs)("div",{className:"my-12 text-8xl",children:[Object(b.jsx)("span",{className:"px-2 py-4 text-blue-900 bg-gray-200",children:m(s)}),Object(b.jsx)("span",{className:"text-gray-200",children:":"}),Object(b.jsx)("span",{className:"px-2 py-4 text-blue-900 bg-gray-200",children:p(s)}),Object(b.jsx)("span",{className:"text-gray-200",children:":"}),Object(b.jsx)("span",{className:"px-2 py-4 text-blue-900 bg-gray-200",children:h(s)})]})}var y=function(e){var t=e.start,a=e.end,c=e.duration;return Object(b.jsxs)("tr",{className:"bg-white border-4 border-gray-200",children:[Object(b.jsx)("td",{className:"px-16 py-2",children:new Date(t).toLocaleString()}),Object(b.jsx)("td",{className:"px-16 py-2",children:new Date(a).toLocaleString()}),Object(b.jsxs)("td",{className:"px-16 py-2",children:[m(c),":",p(c),":",h(c)]})]})};function v(e){var t=e.data;return Object(b.jsxs)("table",{className:"min-w-full table-auto",children:[Object(b.jsx)("thead",{className:"justify-between",children:Object(b.jsxs)("tr",{className:"bg-gray-800",children:[Object(b.jsx)("th",{className:"px-16 py-2",children:Object(b.jsx)("span",{className:"text-gray-200",children:"Started at"})}),Object(b.jsx)("th",{className:"px-16 py-2",children:Object(b.jsx)("span",{className:"text-gray-200",children:"Ended at"})}),Object(b.jsx)("th",{className:"px-16 py-2",children:Object(b.jsx)("span",{className:"text-gray-200",children:"Duration"})})]})}),Object(b.jsx)("tbody",{className:"h-4 text-gray-800 bg-gray-200",children:t&&t.length>0?t.map((function(e){return Object(c.createElement)(y,Object(i.a)(Object(i.a)({},e),{},{key:e.start}))})):Object(b.jsx)("tr",{className:"text-gray-800 bg-white border-4 border-gray-200",children:Object(b.jsx)("td",{colSpan:"4",children:"No data tracked yet"})})})]})}var N=function(){var e=Object(c.useState)(void 0),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(j.a)(r,2),u=s[0],d=s[1],x=Object(c.useState)({}),f=Object(j.a)(x,2),y=f[0],N=f[1],S=Object(c.useState)(0),w=Object(j.a)(S,2),k=w[0],E=w[1];Object(c.useEffect)((function(){!0===a?N((function(e){return Object(i.a)(Object(i.a)({},e),{},{start:Date.now()})})):!1===a&&N((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:Date.now()})}))}),[a]),Object(c.useEffect)((function(){"start"in y&&"end"in y&&"duration"in y&&(d((function(e){return e&&[y].concat(Object(l.a)(e))})),N({}))}),[y]);var D=Object(c.useCallback)((function(e){N((function(t){return Object(i.a)(Object(i.a)({},t),{},{duration:e})})),E((function(t){return t+e}))}),[]);return Object(b.jsxs)("div",{className:"w-full h-screen text-gray-100 bg-blue-900",children:[Object(b.jsx)(o,{}),Object(b.jsxs)("main",{className:"flex flex-col mx-4",children:[Object(b.jsxs)("div",{className:"mt-24 text-center",children:[Object(b.jsx)(g,{isTracking:a,count:!a&&0,saveData:D}),Object(b.jsx)(O,{variant:a?"stop":"start",onClick:function(){n(!a)}})]}),Object(b.jsx)("div",{className:"mt-16 mb-16 text-center",children:Object(b.jsx)(v,{data:u})}),Object(b.jsxs)("div",{className:"mt-auto text-5xl text-center text-yellow-400",children:[Object(b.jsx)("span",{className:"pr-16",children:"Total time:"}),Object(b.jsxs)("span",{children:[" ",m(k),":",p(k),":",h(k)]})]})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.bca71b25.chunk.js.map