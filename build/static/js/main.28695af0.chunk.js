(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},20:function(e,n,t){},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=(t(20),t(4)),l=t(2),i=function(e){var n=e.handleSubmit,t=e.newName,a=e.handleNameChange,u=e.newNumber,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.searchString,t=e.handleSearchChange;return r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{value:n,onChange:t}))},d=(t(21),function(e){var n=e.name,t=e.number,a=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("p",{className:"person"},n," ",t),r.a.createElement("button",{className:"delete",onClick:a},"delete"))}),f=function(e){var n=e.persons,t=e.handleDelete;return r.a.createElement(r.a.Fragment,null,n.map((function(e){var n=e.name,a=e.number,u=e.id;return r.a.createElement(d,{key:u,name:n,number:a,handleDelete:function(){return t(u)}})})))},s=t(3),h=t.n(s),b="/api/persons",g=function(){return h.a.get(b).then((function(e){return e.data}))},v=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.status}))},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){var n=e.message,t={color:e.color,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return null===n?null:r.a.createElement("div",{className:"notification",style:t},n)},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),d=Object(l.a)(c,2),s=d[0],h=d[1],b=Object(a.useState)(""),j=Object(l.a)(b,2),O=j[0],S=j[1],C=Object(a.useState)(""),N=Object(l.a)(C,2),y=N[0],k=N[1],D=Object(a.useState)(null),B=Object(l.a)(D,2),I=B[0],J=B[1],L=Object(a.useState)("green"),x=Object(l.a)(L,2),z=x[0],F=x[1];Object(a.useEffect)((function(){g().then((function(e){return u(e)}))}),[]);var P=function(){setTimeout((function(){return J(null)}),3e3)},R=function(e,n){u(t.filter((function(e){return e.id!==n}))),J("Information of ".concat(e," has already been removed from server")),F("red"),P()},T=t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:I,color:z}),r.a.createElement(m,{searchString:y,handleSearchChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(i,{handleSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(n){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var a=Object(o.a)(Object(o.a)({},n),{},{number:O});E(a.id,a).then((function(e){J("".concat(e.name," number updated to ").concat(e.number)),F("green"),u(t.map((function(n){return n.id===e.id?e:n}))),P()})).catch((function(e){R(s,n.id)}))}}else v({name:s,number:O}).then((function(e){u(t.concat(e)),h(""),S(""),J("".concat(e.name," added")),F("green"),P()}))},newName:s,handleNameChange:function(e){h(e.target.value)},newNumber:O,handleNumberChange:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{persons:T,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&p(e).then((function(a){u(t.filter((function(n){return n.id!==e}))),J("".concat(n.name," was deleted")),F("green"),P()})).catch((function(e){R(n.name,n.id)}))}}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.28695af0.chunk.js.map