(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{45:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),o=n(7),i=n.n(o),b=n(33),u=n(6),j=(n(45),n(27)),s=n(28),l=n(35),d=n(34),O=function(e){var t=e.children;return Object(c.jsx)("div",{className:"container",children:t})},h=n(25),f=n(29),m=n.n(f),x=n(8),p=Object(x.b)("contacts/add",(function(e,t){return{payload:{id:m.a.generate(),name:e,number:t}}})),v=Object(x.b)("contacts/delete"),g=Object(x.b)("todos/changeFilter"),y=function(e){return e.contacts.items},C=function(e){return e.contacts.filter},k=function(e){var t=y(e),n=C(e).toLowerCase();return t.filter((function(e){var t=e.name;return t&&t.toLowerCase&&t.toLowerCase().includes(n)}))},w=n(11);var F=function(){var e=Object(u.b)(),t=Object(u.c)(y),n=Object(r.useState)(""),a=Object(h.a)(n,2),o=a[0],i=a[1],b=Object(r.useState)(""),j=Object(h.a)(b,2),s=j[0],l=j[1],d=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":i(c);break;case"number":l(c);break;default:return}},O=function(){i(""),l("")};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{onSubmit:function(n){n.preventDefault(),!function(e){return t.find((function(t){return t.name===e}))}(o)?!function(e){return t.find((function(t){return t.number===e}))}(s)?!function(e,t){return""===e.trim()||""===t.trim()}(o,s)?!function(e){return!/\d{3}[-]\d{2}[-]\d{2}/g.test(e)}(s)?e(p(o,s)):w.b.error(" Enter the correct phone number "):w.b.info(" Enter the correct name and number "):Object(w.b)(" ".concat(s," is already in use ")):Object(w.b)(" ".concat(o,"' is already in use ")),O()},children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("input",{type:"text",name:"name",value:o,onChange:d,placeholder:"Andrey Kovsh"})]}),Object(c.jsxs)("label",{children:["Phone number",Object(c.jsx)("input",{type:"text",name:"number",value:s,onChange:d,placeholder:"817-18-41"})]}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]})})})};function L(){var e=Object(u.c)(C),t=Object(u.b)();return Object(c.jsxs)("label",{children:["Find contacts by name",Object(c.jsx)("input",{type:"text",value:e,onChange:function(e){return t(g(e.target.value))}})]})}var S,P=function(){var e=Object(u.b)(),t=Object(u.c)(k);Object(u.c)(y);return Object(c.jsx)("ul",{children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(c.jsxs)("li",{children:[Object(c.jsxs)("p",{children:[Object(c.jsxs)("b",{children:[r," "]}),Object(c.jsx)("em",{children:a})]}),Object(c.jsx)("button",{type:"button",onClick:function(){return e(v(n))},children:"delete"})]},n)}))})},A=(n(54),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(O,{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(F,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(L,{}),Object(c.jsx)(P,{}),Object(c.jsx)(w.a,{autoClose:5e3})]})}}]),n}(r.Component)),E=n(30),T=n(17),B=n(31),D=n.n(B),I=n(9),J=n(32),N=n.n(J),z=n(18),K=n(3),M=Object(x.c)([],(S={},Object(z.a)(S,p,(function(e,t){var n=t.payload;return[].concat(Object(T.a)(e),[n])})),Object(z.a)(S,v,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),S)),q=Object(x.c)("",Object(z.a)({},g,(function(e,t){return t.payload}))),G=Object(K.c)({items:M,filter:q}),H=[].concat(Object(T.a)(Object(x.d)({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}})),[D.a]),Q={key:"contacts",storage:N.a,blacklist:["filter"]},R=Object(x.a)({reducer:{contacts:Object(I.g)(Q,G)},middleware:H,devTools:!1}),U=Object(I.h)(R),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u.a,{store:R,children:Object(c.jsx)(E.a,{loading:null,persistor:U,children:Object(c.jsx)(b.a,{children:Object(c.jsx)(A,{})})})})}),document.getElementById("root")),V()}},[[58,1,2]]]);
//# sourceMappingURL=main.705fbdc1.chunk.js.map