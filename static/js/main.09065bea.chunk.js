(this["webpackJsonplittle-plan"]=this["webpackJsonplittle-plan"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),o=n.n(a),c=n(7),s=n.n(c),i=(n(14),n(4)),l=n.n(i),u=n(8),m=n(5),d=n(2),b=n(3),j=(n(16),function(e){var t=e.onClear;return Object(r.jsxs)("div",{className:"d-flex Header",children:[Object(r.jsx)("h1",{className:"p-h1 tc-grey-100",children:"Your Little Plan"}),Object(r.jsx)("button",{className:"p-btn--secondary",onClick:t,children:"Clear"})]})}),p=(n(17),function(){return Object(r.jsx)("footer",{className:"d-flex Footer",children:Object(r.jsxs)("p",{className:"tc-grey-300",children:["\xa9 ",(new Date).getFullYear()," The Little Plan"]})})}),h=(n(18),function(e){var t=e.onGetStarted;return Object(r.jsxs)("div",{className:"w60",children:[Object(r.jsx)("h2",{className:"p-h2  mb16",children:"Looking for a recommendation for your next insurance plan?"}),Object(r.jsx)("p",{className:"p-p",children:"Look no more, because we have some already. Just provide us with a few details"}),Object(r.jsx)("button",{className:"p-btn--primary mt32",onClick:t,children:"Get started"})]})}),O=(n(19),function(e){var t,n=e.control,a=e.onControlChange,c=e.onEnter,s=function(e){if("Enter"===e.key&&n.answer)return c()};return"radio"===n.options.type?Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"d-inline-block mb16",children:n.label}),n.options.items.map((function(e,t){return Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)("input",{id:e.value,className:"p-radio",type:"radio",value:e.value,name:n.controlName,autoFocus:0===t,onChange:function(e){return a(n.controlName,e.currentTarget.value)},onKeyUp:function(e){return s(e)}}),Object(r.jsx)("label",{htmlFor:e.value,className:"p-label",children:e.label})]},e.value)}))]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:n.controlName,className:"d-inline-block mb16",children:n.label}),Object(r.jsx)("input",Object(d.a)(Object(d.a)({className:"p-input"},n.options),{},{value:n.answer,autoFocus:!0,onChange:function(e){return a(n.controlName,e.currentTarget.value)},onKeyUp:function(e){return s(e)}})),Object(r.jsx)("ul",{className:"mt8 ",children:(null!==(t=n.errors)&&void 0!==t?t:[]).map((function(e,t){return Object(r.jsx)("li",{className:"p-p--small tc-red-500",children:e},t)}))})]})}),f=function(e){var t=e.controls,n=e.currentIndex,a=e.onNext,o=e.onFormUpdate,c=e.isButtonLoading,s=t[n];return Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{control:s,onControlChange:o,onEnter:a}),Object(r.jsx)("button",{type:"button",className:"p-btn--primary mt32 ".concat(c?"p-btn--loading":""),disabled:!Boolean(s.answer),onClick:a,children:n===t.length-1?"Get your recommendation":"Next"})]})},v=(n(20),function(e){var t=e.recommendation;return Object(r.jsxs)("li",{className:"Recommendation mb8",children:[Object(r.jsx)("span",{className:"Recommendation-type",children:t.type.toLowerCase().split("_").join(" ")}),Object(r.jsxs)("span",{children:["\u20ac",Number(t.price.amount).toFixed(2).toLocaleString(navigator.language||"de-DE")," ","per ",t.price.periodicity.toLowerCase()]})]})}),x=function(e){var t=e.recommendations,n=e.isFetching,o=Object(a.useState)(!1),c=Object(b.a)(o,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){i((function(){return!t.length&&!n}))}),[t,n]),Object(r.jsxs)("div",{className:"Recommendations",children:[s?Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"p-h2 tc-red-700",children:"It must be terrible!"}),Object(r.jsx)("p",{className:"p-p",children:"Unfortunately, there was an issue getting a recommendation. Please try again"})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"p-h2 tc-green-700",children:"We got your recommendation"}),Object(r.jsxs)("p",{className:"p-p",children:["Based on your answers, this is what makes sense for you and what you should pay."," "]})]}),n?Object(r.jsx)("div",{className:"d-flex Recommendations-spinner mt32",children:Object(r.jsx)("div",{className:"ds-spinner ds-spinner__m"})}):Object(r.jsx)("ul",{className:"mt16",children:t.map((function(e){return Object(r.jsx)(v,{recommendation:e},e.type)}))})]})},N=[{controlName:"firstName",label:"What's your first name?",options:{placeholder:"e.g Jane",type:"text"}},{controlName:"address",label:"What's your current address?",options:{type:"text",placeholder:"e.g Lohm\xfchlenstra\xdfe 65"}},{controlName:"occupation",label:"What's your occupation",options:{type:"radio",items:[{label:"Employed",value:"EMPLOYED"},{label:"Self employed",value:"SELF_EMPLOYED"},{label:"Student",value:"STUDENT"}]}},{controlName:"hasChildren",label:"Do you have any children?",options:{type:"radio",items:[{label:"Yes",value:"HAS_CHILDREN"},{label:"No",value:"HAS_NO_CHILDREN"}]}},{controlName:"numberOfChildren",label:"How many children do you have?",options:{type:"number",placeholder:"e.g 2"},visibleOn:{previousValue:"HAS_CHILDREN"}},{controlName:"email",label:"What's your email?",options:{type:"email",placeholder:"e.g jane.doe@getpopsure.com"}}];n(21),n(22);var g=function(){var e=Object(a.useState)((function(){return N.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{answer:"",errors:[]})}))})),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(b.a)(s,2),O=i[0],v=i[1],g=Object(a.useState)(!1),y=Object(b.a)(g,2),w=y[0],S=y[1],C=Object(a.useState)(!1),k=Object(b.a)(C,2),F=k[0],E=k[1],L=Object(a.useState)(!1),I=Object(b.a)(L,2),T=I[0],D=I[1],B=Object(a.useState)([]),H=Object(b.a)(B,2),P=H[0],_=H[1],A=Object(a.useState)(!1),J=Object(b.a)(A,2),R=J[0],U=J[1];Object(a.useEffect)((function(){var e=Boolean(localStorage.getItem("accessToken"));D(e),e&&K();var t=JSON.parse(localStorage.getItem("formControls")),n=(null!==t&&void 0!==t?t:[]).findIndex((function(e){return!e.answer}));n>=0&&(n=G(n),v(n),c((function(){return t.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{errors:[]})}))})),S(!0))}),[]);var G=function(e){var t,n=N[e],r=N[e-1];return(null===(t=n.visibleOn)||void 0===t?void 0:t.previousValue)&&r.answer!==n.visibleOn.previousValue&&(e+=1),e},V=function(){var e=Object(m.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.reduce((function(e,t){return e[t.controlName]=t.answer,e}),{}),t.hasChildren,r=Object(u.a)(t,["hasChildren"]),c((function(){return n.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{errors:[]})}))})),E(!0),e.next=6,W(r);case 6:if((a=e.sent).errors&&Y(a.errors),!a.jwt){e.next=13;break}return M(a.jwt),D(!0),e.next=13,K();case 13:E(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(m.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://challenge-dot-popsure-204813.appspot.com/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(d.a)(Object(d.a)({},t),{},{numberOfChildren:Number(t.numberOfChildren)}))});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){var t=Object.keys(e),r=null,a=n.map((function(n,a){return t.includes(n.controlName)?(r||(r=a),Object(d.a)(Object(d.a)({},n),{},{errors:e[n.controlName]})):n}));c((function(){return a})),null!==r&&v(r)},M=function(e){localStorage.removeItem("accessToken"),localStorage.setItem("accessToken",e)},K=function(){var e=Object(m.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.next=3,fetch("https://challenge-dot-popsure-204813.appspot.com/recommendation",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("accessToken")}});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,t.ok&&(n.sort((function(e,t){return e.price.amount-t.price.amount})),_(n)),U(!1),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"d-flex App ws8",children:[Object(r.jsx)(j,{onClear:function(){localStorage.clear(),c((function(){return N.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{answer:"",errors:[]})}))})),v(0),D(!1),S(!1)}}),Object(r.jsx)("main",{className:"App-main",children:T?Object(r.jsx)(x,{recommendations:P,isFetching:R}):Object(r.jsx)(o.a.Fragment,{children:w?Object(r.jsx)(f,{controls:n,currentIndex:O,onNext:function(){O===n.length-1?V():function(){var e,t=n[O],r=n[O+1];(null===(e=r.visibleOn)||void 0===e?void 0:e.previousValue)?t.answer===r.visibleOn.previousValue?v((function(e){return e+1})):v((function(e){return e+2})):v((function(e){return e+1}))}(),localStorage.setItem("formControls",JSON.stringify(n))},onFormUpdate:function(e,t){var r=n.map((function(n){return n.controlName===e?Object(d.a)(Object(d.a)({},n),{},{answer:t}):n}));c(r)},onFormSubmitted:V,isButtonLoading:F}):Object(r.jsx)(h,{onGetStarted:function(){return S(!0)}})})}),Object(r.jsx)(p,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),y()}],[[23,1,2]]]);
//# sourceMappingURL=main.09065bea.chunk.js.map