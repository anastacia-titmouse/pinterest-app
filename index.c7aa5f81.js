!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function n(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function c(t){e(i,o,a,c,l,"next",t)}function l(t){e(i,o,a,c,l,"throw",t)}c(void 0)}))}}var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new B(r||[]);return a._invoke=function(t,e,n){var r=s;return function(o,a){if(r===m)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=I(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var l=d(t,e,n);if("normal"===l.type){if(r=n.done?p:f,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s="suspendedStart",f="suspendedYield",m="executing",p="completed",h={};function v(){}function y(){}function g(){}var _={};l(_,a,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(O([])));E&&E!==n&&r.call(E,a)&&(_=E);var w=g.prototype=v.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,i,c){var l=d(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function I(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=d(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=g,l(w,"constructor",g),l(g,"constructor",y),y.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},L(k.prototype),l(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a=function(){var t=document.getElementById("desk_selector"),e=v(),n=!0,r=!1,o=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value,l=e[c],u=document.createElement("option");u.setAttribute("value",c),u.innerHTML=l.title,l.active&&(t.value=l.id,u.setAttribute("selected","selected")),t.appendChild(u)}}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}},i=function(){document.getElementById("desk_selector").innerHTML="",a()};a();var c=function(t){document.getElementById("select_board_modal").classList.add("visible"),document.getElementById("select_board_modal_pin_id").value=t,document.getElementById("select_board_modal_selector").innerHTML="",function(){var t=document.getElementById("select_board_modal_selector"),e=v(),n=!0,r=!1,o=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;if("main"!==c){var l=e[c],u=document.createElement("option");u.setAttribute("value",c),u.innerHTML=l.title,t.appendChild(u)}}}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}}()};function l(t){t.preventDefault();var e,n=document.getElementById("select_board_modal_pin_id").value,r=document.getElementById("select_board_modal_selector").value,o=localStorage.getItem("desk-pins-".concat(r));(e=o?new Set(JSON.parse(o)):new Set).add(n),localStorage.setItem("desk-pins-".concat(r),JSON.stringify(Array.from(e))),u()}function u(){document.getElementById("select_board_modal").classList.remove("visible")}var d,s=function(){document.getElementById("complaint_modal").style.display="none"},f=(d=n(t(r).mark((function e(n){return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),s();case 2:case"end":return t.stop()}}),e)}))),function(t){return d.apply(this,arguments)});function m(t,e){var n=document.getElementById("pin_".concat(e));n.parentElement.removeChild(n),function(t,e){var n,r=localStorage.getItem("desk-pins-".concat(t));n=r?new Set(JSON.parse(r)):new Set;n.delete(e),console.log(n),localStorage.setItem("desk-pins-".concat(t),JSON.stringify(Array.from(n)))}(t,e)}function p(t){var e=v(),n=!0,r=!1,o=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;e[c].active=t===c,console.log(c),console.log(t===c)}}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}localStorage.setItem("desks",JSON.stringify(e))}function h(t,e,n){var r=v();return r[t]={id:t,title:e,active:n},localStorage.setItem("desks",JSON.stringify(r)),i(),r}function v(){var t=localStorage.getItem("desks");return t?JSON.parse(t):{}}function y(t){return g.apply(this,arguments)}function g(){return(g=n(t(r).mark((function e(n){var o,a,i,c,l,u;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=[],"main"!==n){t.next=10;break}return t.next=4,fetch("https://63052f15697408f7edc32802.mockapi.io/api/v1/card",{method:"get"});case 4:return a=t.sent,t.next=7,a.json();case 7:o=t.sent,t.next=17;break;case 10:if(!(i=localStorage.getItem("desk-pins-".concat(n)))){t.next=17;break}return pinIds=JSON.parse(i),c=pinIds.map((function(t){return fetch("https://63052f15697408f7edc32802.mockapi.io/api/v1/card/".concat(t),{method:"get"}).then((function(t){return t.json()}))})),t.next=16,Promise.all(c);case 16:o=t.sent;case 17:if(l=document.getElementById("search_top"),!(u=l.value)){t.next=23;break}return t.abrupt("return",o.filter((function(t){return t.hashtag.startsWith(u)})));case 23:return t.abrupt("return",o);case 24:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function _(){return b.apply(this,arguments)}function b(){return(b=n(t(r).mark((function e(){var n,o,a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=document.getElementById("board_list")).innerHTML="",o=v(),0===Object.keys(o).length&&(o=h("main","Homepage",!0)),a=w()){t.next=7;break}throw new Error("Active desk not found");case 7:return t.next=9,y(a.id);case 9:t.sent.map((function(t){var e=E(t,a.id);n.appendChild(e)}));case 11:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function E(t,e){var n=document.createElement("div");n.classList.add("board-list__pin--wrap"),n.setAttribute("id","pin_".concat(t.id));var r=document.createElement("div");r.classList.add("board-list__pin"),n.appendChild(r);var o=document.createElement("img");o.classList.add("board-list__pin-img"),o.setAttribute("src",t.imageUrl),o.setAttribute("alt",t.imageUrl),r.appendChild(o);var a=document.createElement("div");a.classList.add("pin-actions-wrapper"),r.appendChild(a);var i=document.createElement("div");if(i.classList.add("pin-actions"),a.appendChild(i),"main"===e){var l=document.createElement("button");l.classList.add("pin-btn","add-pin"),l.textContent="Добавить",i.appendChild(l),l.onclick=function(){c(t.id)}}else{var u=document.createElement("button");u.classList.add("pin-actions__delete-btn"),u.innerHTML="&times;",u.onclick=function(){m(e,t.id)},i.appendChild(u)}var d=document.createElement("button");d.classList.add("pin-btn","complaint-pin"),d.textContent="Пожаловаться",d.onclick=function(){var e;e=t.id,document.getElementById("complaint_modal").style.display="flex",document.getElementById("complaint_modal_hidden_pin_id").value=e},i.appendChild(d);var s=document.createElement("div");s.classList.add("board-list__description--wrapper"),n.appendChild(s);var f=document.createElement("div");f.classList.add("board-list__avatar-wrapper"),s.appendChild(f);var p=document.createElement("img");p.setAttribute("src",t.authorAvatar),p.classList.add("board-list__avatar"),f.appendChild(p);var h=document.createElement("p");return h.classList.add("board-list__description"),h.textContent=t.description,s.appendChild(h),n}function w(){var t=v(),e=Object.keys(t).find((function(e){return t[e].active}));if(e)return t[e]}var L,k={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},I=new Uint8Array(16);function x(){if(!L&&!(L="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return L(I)}for(var S=[],B=0;B<256;++B)S.push((B+256).toString(16).slice(1));function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(S[t[e+0]]+S[t[e+1]]+S[t[e+2]]+S[t[e+3]]+"-"+S[t[e+4]]+S[t[e+5]]+"-"+S[t[e+6]]+S[t[e+7]]+"-"+S[t[e+8]]+S[t[e+9]]+"-"+S[t[e+10]]+S[t[e+11]]+S[t[e+12]]+S[t[e+13]]+S[t[e+14]]+S[t[e+15]]).toLowerCase()}var j=function(t,e,n){if(k.randomUUID&&!e&&!t)return k.randomUUID();var r=(t=t||{}).random||(t.rng||x)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return O(r)},C=function(){document.getElementById("create_board_modal").style.display="none",N(""),A()},N=function(t){var e=document.querySelector("#crete_board_modal__form-error");t?(e.textContent=t,e.classList.add("visible")):e.classList.contains("visible")&&e.classList.remove("visible")},A=function(){document.querySelector("#create_board_modal__desk-title-input").value="",N("")},T=function(t){t.preventDefault();var e=document.getElementById("crete_board_modal__form").querySelector("#create_board_modal__desk-title-input").value;if(e){var n=v();Object.keys(n).some((function(t){return e===n[t].title}))?N("Desk with same title already exists"):(h(j(),e,!1),A(),C())}else N("Missing desk title")};document.addEventListener("DOMContentLoaded",(function(){_().catch((function(t){console.log(t)})),window.onclick=function(){var t;t=document.getElementById("complaint_modal"),window.onclick=function(e){e.target==t&&s()}},window.onclick=function(){var t;t=document.getElementById("create-board-modal-close"),window.onclick=function(e){e.target==t&&C()}},document.getElementById("complaint_modal_cancel").addEventListener("click",(function(){s()})),document.getElementById("complaint_modal_form").addEventListener("submit",(function(t){f(t)})),document.getElementById("create_desk_btn").addEventListener("click",(function(){var t;(t=document.getElementById("create_board_modal"))&&(t.style.display="block")})),document.getElementById("close_create_board_modal").addEventListener("click",(function(){C()})),document.getElementById("crete_board_modal__form").addEventListener("submit",(function(t){T(t)})),document.getElementById("desk_selector").addEventListener("change",(function(t){p(t.target.value),_().catch((function(t){console.log(t)}))})),document.getElementById("close_select_board_modal").addEventListener("click",(function(){u()})),document.getElementById("select_board_modal__form").addEventListener("submit",(function(t){l(t)})),document.getElementById("search_top").addEventListener("input",(function(){_()})),document.getElementById("logo").addEventListener("click",(function(t){t.preventDefault(),p("main"),_(),document.getElementById("desk_selector").value="main"}))}))}();
//# sourceMappingURL=index.c7aa5f81.js.map
