(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(14),r=t.n(c),o=t(3),u=t(0),i=function(e){var n=e.search,t=e.handleSearchChange;return Object(u.jsxs)("div",{children:["Filter shown with",Object(u.jsx)("input",{value:n,onChange:t})]})},s=function(e){var n=e.addName,t=e.newName,a=e.newNumber,c=e.handleNameChange,r=e.handleNumberChange;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["Name: ",Object(u.jsx)("input",{value:t,onChange:c})]}),Object(u.jsxs)("div",{children:["Number: ",Object(u.jsx)("input",{value:a,onChange:r})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})})},l=function(e){var n=e.person,t=e.deleteContact;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("li",{children:Object(u.jsxs)("form",{id:n.id,className:n.name,onSubmit:t,children:[n.name," ",n.number,Object(u.jsx)("button",{type:"submit",children:"delete"})]})})})},d=function(e){var n=e.persons,t=e.deleteContact;return Object(u.jsx)("ul",{style:{listStyle:"none",paddingLeft:0},children:n.map((function(e){return Object(u.jsx)(l,{person:e,deleteContact:t},e.name)}))})},j=t(4),b=t.n(j),h="/api/persons",m=function(){return b.a.get(h).then((function(e){return e.data}))},f=function(e){return b.a.post(h,e).then((function(e){return e.data}))},O=function(e){return b.a.delete("".concat(h,"/").concat(e))},p=function(e,n){return b.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:"notification",children:n})},v=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:"error",children:n})},g=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),j=l[0],b=l[1],h=Object(a.useState)(""),g=Object(o.a)(h,2),w=g[0],C=g[1],N=Object(a.useState)(""),S=Object(o.a)(N,2),y=S[0],k=S[1],L=Object(a.useState)(null),I=Object(o.a)(L,2),T=I[0],D=I[1],F=Object(a.useState)(null),A=Object(o.a)(F,2),E=A[0],J=A[1];Object(a.useEffect)((function(){m().then((function(e){c(e)}))}),[]);var B=y?t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})):t;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(x,{message:T}),Object(u.jsx)(v,{message:E}),Object(u.jsx)(i,{search:y,handleSearchChange:function(e){k(e.target.value)}}),Object(u.jsx)("h2",{children:"Add a new"}),Object(u.jsx)(s,{addName:function(e){e.preventDefault();var n={name:j,number:w},a=t.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}));void 0!==a?window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&(p(a.id,n).then((function(e){c(t.map((function(t){return e.name===t.name?n:t})))})),D("Updated ".concat(n.name,"'s contact information")),setTimeout((function(){D(null)}),5e3)):f(n).then((function(e){c(t.concat(e)),b(""),C(""),k(""),D("Added ".concat(n.name,"'s contact information")),setTimeout((function(){D(null)}),5e3)})).catch((function(e){J(e.response.data.error),setTimeout((function(){J(null)}),5e3)}))},newName:j,newNumber:w,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(d,{persons:B,deleteContact:function(e){e.preventDefault();var n=e.target.id,a=e.target.className;window.confirm("Delete ".concat(a,"?"))&&(O(n).catch((function(e){J("Information of ".concat(a," was already deleted")),setTimeout((function(){J(null)}),5e3)})),c(t.filter((function(e){return parseInt(e.id,10)!==parseInt(n,10)}))),b(""),C(""),k(""))}})]})};t(38);r.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a1e4f505.chunk.js.map