(this["webpackJsonp10-1_editing"]=this["webpackJsonp10-1_editing"]||[]).push([[0],{14:function(e,n,t){e.exports=t(27)},19:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(5),i=t.n(c),o=(t(19),t(2)),u="ADD_SERVICE",l="REMOVE_SERVICE",p="CHANGE_SERVICE_FIELD",m="EDIT_SERVICE",d="UPDATE_SERVICE",s="CANCEL_SERVICE";var E=function(){var e=Object(o.c)((function(e){return e.serviceAdd})),n=Object(o.b)(),t=function(e){var t=e.target,r=t.name,a=t.value;n(function(e,n){return{type:p,payload:{name:e,value:n}}}(r,a))};return a.a.createElement("form",{onSubmit:function(t){var r,a,c;t.preventDefault(),e.id?n((r=e.id,a=e.name,c=e.price,{type:d,payload:{id:r,name:a,price:c}})):n(function(e,n){return{type:u,payload:{name:e,price:n}}}(e.name,e.price))},onReset:function(e){n({type:s})}},a.a.createElement("input",{name:"name",onChange:t,value:e.name}),a.a.createElement("input",{name:"price",onChange:t,value:e.price}),a.a.createElement("button",{type:"submit"},"Save"),e.id&&a.a.createElement("button",{type:"reset"},"Cancel"))};var f=function(){var e=Object(o.c)((function(e){return e.serviceList})),n=Object(o.b)(),t=function(e){n(function(e){return{type:l,payload:{id:e}}}(e))},r=function(e,t,r){n(function(e,n,t){return{type:m,payload:{id:e,name:n,price:t}}}(e,t,r))};return a.a.createElement("ul",null,e.map((function(e){return a.a.createElement("li",{key:e.id},e.name," ",e.price,a.a.createElement("button",{onClick:function(){return r(e.id,e.name,e.price)}},"\ud83d\udd89"),a.a.createElement("button",{onClick:function(){return t(e.id)}},"\u2715"))})))};var v=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null),a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(4),b=t(13),O=t(6),g=t.n(O),h=[{id:g()(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u0430",price:21e3},{id:g()(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0434\u0438\u0441\u043f\u043b\u0435\u044f",price:25e3}];var _=t(9);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var j={name:"",price:""};var C=Object(y.b)({serviceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:var t=n.payload,r=t.name,a=t.price;return[].concat(Object(b.a)(e),[{id:g()(),name:r,price:Number(a)}]);case l:var c=n.payload.id;return e.filter((function(e){return e.id!==c}));case d:var i=n.payload,o=i.id,p=i.name,m=i.price;return e.map((function(e){return e.id===o?{id:o,name:p,price:m}:e}));default:return e}},serviceAdd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(console.log(n.type),n.type){case p:var t=n.payload,r=t.name,a=t.value;return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(t,!0).forEach((function(n){Object(_.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,Object(_.a)({},r,a));case u:case d:return j;case m:var c=n.payload;return{id:c.id,name:c.name,price:c.price};case s:return j;default:return e}}}),D=Object(y.c)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(a.a.createElement(o.a,{store:D},a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.148fbdee.chunk.js.map