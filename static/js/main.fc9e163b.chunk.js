(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),s=n.n(c),a=n(5),i=n(1),b=(n(10),n(4)),d=n.n(b),l=(n(11),n(0)),o=function(t){var e,n=t.tabs,c=t.selectedTabId,s=t.setSelectedTab;return Object(l.jsxs)("div",{className:"tabs",children:[Object(l.jsx)("ul",{className:"tabs__list",children:n.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)("button",{className:d()("tabs__tab_btn",{tabs__tab_btn__selected:t.id===c}),type:"button",onClick:function(){s(t.id)},children:t.title})},t.id)}))}),Object(l.jsx)("div",{className:"tabs__selected-tab-content",children:null===(e=n.find((function(t){return t.id===c})))||void 0===e?void 0:e.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(i.useState)(r[0]),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsxs)("h1",{children:["Selected tab is\xa0",n.id]}),Object(l.jsx)(o,{tabs:r,selectedTabId:n.id,setSelectedTab:function(t){var e=r.find((function(e){return e.id===t}))||r[0];c(e)}})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.fc9e163b.chunk.js.map