(this["webpackJsonpreact-ts-todolist"]=this["webpackJsonpreact-ts-todolist"]||[]).push([[0],[,,,,,function(t,e,n){t.exports=n(13)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),c=n.n(a),u=(n(10),n(3)),l=n(4),i=(n(11),function(t){return r.a.createElement("ul",null,t.items.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",null,e.text),r.a.createElement("button",{onClick:function(){return t.onDeleteTodo(e.id)}},"DELETE"))})))}),m=(n(12),function(t){var e=Object(o.useRef)(null);return r.a.createElement("form",{onSubmit:function(n){n.preventDefault();var o=e.current.value;t.onAddTodo(o)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"todo-text"},"Todo Text"),r.a.createElement("input",{type:"text",id:"todo-text",ref:e})),r.a.createElement("button",{type:"submit"},"ADD TODO"))}),d=function(){var t=Object(o.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1];return r.a.createElement("div",{className:"App"},r.a.createElement(m,{onAddTodo:function(t){a((function(e){return[].concat(Object(u.a)(e),[{id:Math.random().toString(),text:t}])}))}}),r.a.createElement(i,{items:n,onDeleteTodo:function(t){a((function(e){return e.filter((function(e){return e.id!==t}))}))}}))};c.a.render(r.a.createElement(d,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.8dd2743c.chunk.js.map