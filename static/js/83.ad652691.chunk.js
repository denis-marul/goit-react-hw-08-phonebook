(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[83],{6083:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r="Section_title__SLHvV",a=n(2007),s=n.n(a),i=n(184),o=function(e){var t=e.title,n=e.children;return(0,i.jsxs)("section",{children:[(0,i.jsx)("h2",{className:r,children:t}),n]})};o.protoTypes={title:s().string.isRequired};var c="Form_submitBtn__eUc-v",l="Form_label__8nx+5",u="Form_formInput__sgOCo",m="Form_form__e1yzW",p=n(9434),d=n(5162),f=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},_=function(e){return e.filter},h=function(e){return e.contacts.items},v=function(){var e=(0,p.I0)(),t=(0,p.v9)(h);return(0,i.jsxs)("form",{className:m,onSubmit:function(n){n.preventDefault();var r=n.currentTarget,a=t.find((function(e){return e.name.toLowerCase()===r.elements.name.value.toLowerCase()}));if(a)return r.reset(),alert(a.name+" is already in contacts.");e((0,d.uK)({name:r.elements.name.value,number:r.elements.number.value,id:f(5)})),r.reset()},children:[(0,i.jsx)("label",{className:l,children:"Name"}),(0,i.jsx)("input",{className:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,i.jsx)("label",{className:l,children:"Number"}),(0,i.jsx)("input",{className:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,i.jsx)("button",{className:c,type:"submit",children:"Add contact"})]})};v.protoTypes={handleSubmit:s().func.isRequired};var y="ContactList_contactBtn__GGPNU",b="ContactList_contactItem__MZe0o",x="ContactList_contactsList__a5jYl",j=n(2791),C=function(){var e=(0,p.I0)();(0,j.useEffect)((function(){e((0,d.yF)())}),[e]);var t=(0,p.v9)(h),n=(0,p.v9)(_).toLowerCase(),r=t&&t.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,i.jsx)("ul",{className:x,children:r&&r.map((function(t){var n=t.name,r=t.number,a=t.id;return(0,i.jsxs)("li",{className:b,children:[(0,i.jsx)("p",{children:n})," ",(0,i.jsx)("p",{children:r}),(0,i.jsx)("button",{className:y,onClick:function(){return e((0,d.GK)(a))},children:"Delete"})]},a)}))})};C.protoTypes={visiableContacts:s().array.isRequired,deleteContact:s().func.isRequired};var N="Filter_filterInput__1Cysk",g="Filter_filterLabel__+pnW-",T="Filter_filter__vxThR",k=n(7646),w=function(){var e=(0,p.I0)();return(0,i.jsxs)("div",{className:T,children:[(0,i.jsx)("label",{className:g,children:"Find contact by name"}),(0,i.jsx)("input",{className:N,type:"text",name:"filter",onChange:function(t){var n=t.currentTarget.value;e((0,k.O)(n))}})]})};w.protoTypes={onChangeFilter:s().func.isRequired};var F="Contacts_container__WzsIr",L=function(){return(0,i.jsxs)("div",{className:F,children:[(0,i.jsx)(o,{title:"Phonebook",children:(0,i.jsx)(v,{})}),(0,i.jsxs)(o,{title:"Contacts",children:[(0,i.jsx)(w,{}),(0,i.jsx)(C,{})]})]})}},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,s,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=83.ad652691.chunk.js.map