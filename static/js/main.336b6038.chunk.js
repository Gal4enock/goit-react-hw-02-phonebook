(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(10),o=n.n(s),i=n(11),l=n(3),u=n(4),h=n(5),b=n(7),m=n(6),j=n(19),d=n(9),f=n.n(d),p=function(t){var e=t.contacts,n=t.onDelete;return Object(a.jsx)("ul",{className:f.a.list,children:e.length?e.map((function(t){return Object(a.jsxs)("li",{className:f.a.item,children:[t.name,": ",t.number," ",Object(a.jsx)("button",{onClick:function(){return n(t.id)},type:"button",children:"Delete"})," "]},t.id)})):""})},O=n(2),v=n.n(O),C=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(l.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.toAddContacts(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:v.a.lable,children:["Name",Object(a.jsx)("input",{className:v.a.input,name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:v.a.lable,children:["Number",Object(a.jsx)("input",{className:v.a.input,name:"number",type:"phone",value:this.state.number,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component);function x(t){var e=t.value,n=t.toFilter;return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})})}var g=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(l.a)({},a,c))},t.addContacts=function(e,n){var a={name:e,id:Object(j.a)(),number:n};t.state.contacts.find((function(t){return t.name===a.name}))?alert("".concat(a.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[a])}}))},t.handleDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilter=function(){var e=t.state,n=e.contacts,a=e.filter;return n.length?n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())})):""},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(C,{toAddContacts:this.addContacts}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(x,{value:t,toFilter:this.handleChange}),Object(a.jsx)(p,{contacts:this.handleFilter(),onDelete:this.handleDelete})]})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={input:"ContactForm_input__2DkXb",lable:"ContactForm_lable__3slwO",form:"ContactForm_form__2JyMp"}},9:function(t,e,n){t.exports={item:"Contacts_item__3CTbl",list:"Contacts_list__1fZVw"}}},[[17,1,2]]]);
//# sourceMappingURL=main.336b6038.chunk.js.map