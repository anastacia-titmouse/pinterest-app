!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void n(t)}c.done?e(l):Promise.resolve(l).then(r,o)}function n(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function c(t){e(i,o,a,c,l,"next",t)}function l(t){e(i,o,a,c,l,"throw",t)}c(void 0)}))}}var r={},o=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=s(t,e,n);if("normal"===l.type){if(r=n.done?m:f,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=m,n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",m="completed",h={};function v(){}function y(){}function g(){}var _={};l(_,a,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(B([])));E&&E!==n&&r.call(E,a)&&(_=E);var w=g.prototype=v.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function B(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=g,l(w,"constructor",g),l(g,"constructor",y),y.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},L(k.prototype),l(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=B,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:B(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(r);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a=function(){var t=document.getElementById("desk_selector"),e=m(),n=!0,r=!1,o=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value,l=e[c],u=document.createElement("option");u.setAttribute("value",c),u.innerHTML=l.title,l.active&&(t.value=l.id,u.setAttribute("selected","selected")),t.appendChild(u)}}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}},i=function(){document.getElementById("desk_selector").innerHTML="",a()};function c(t){f(t),y().catch((function(t){console.log(t)}))}a();var l=function(t){document.getElementById("select_board_modal").classList.add("visible"),document.getElementById("select_board_modal_pin_id").value=t,document.getElementById("select_board_modal_selector").innerHTML="",function(){var t=document.getElementById("select_board_modal_selector"),e=m(),n=!0,r=!1,o=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;if("main"!==c){var l=e[c],u=document.createElement("option");u.setAttribute("value",c),u.innerHTML=l.title,t.appendChild(u)}}}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}}()};function u(t){t.preventDefault();var e,n=document.getElementById("select_board_modal_pin_id").value,r=document.getElementById("select_board_modal_selector").value,o=localStorage.getItem("desk-pins-".concat(r));(e=o?new Set(JSON.parse(o)):new Set).add(n),localStorage.setItem("desk-pins-".concat(r),JSON.stringify(Array.from(e))),s()}function s(){document.getElementById("select_board_modal").classList.remove("visible")}function d(t,e){var n=document.getElementById("pin_".concat(e));n.parentElement.removeChild(n),function(t,e){var n,r=localStorage.getItem("desk-pins-".concat(t));n=r?new Set(JSON.parse(r)):new Set;n.delete(e),console.log(n),localStorage.setItem("desk-pins-".concat(t),JSON.stringify(Array.from(n)))}(t,e)}function f(t){var e=m(),n=!0,r=!1,o=void 0;try{for(var a,i=Object.keys(e)[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;e[c].active=t===c,console.log(c),console.log(t===c)}}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}localStorage.setItem("desks",JSON.stringify(e))}function p(t,e,n){var r=m();return r[t]={id:t,title:e,active:n},localStorage.setItem("desks",JSON.stringify(r)),i(),r}function m(){var t=localStorage.getItem("desks");return t?JSON.parse(t):{}}function h(t){return v.apply(this,arguments)}function v(){return(v=n(t(r).mark((function e(n){var o,a,i,c,l,u;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=[],"main"!==n){t.next=10;break}return t.next=4,fetch("https://63052f15697408f7edc32802.mockapi.io/api/v1/card",{method:"get"});case 4:return a=t.sent,t.next=7,a.json();case 7:o=t.sent,t.next=17;break;case 10:if(!(i=localStorage.getItem("desk-pins-".concat(n)))){t.next=17;break}return pinIds=JSON.parse(i),c=pinIds.map((function(t){return fetch("https://63052f15697408f7edc32802.mockapi.io/api/v1/card/".concat(t),{method:"get"}).then((function(t){return t.json()}))})),t.next=16,Promise.all(c);case 16:o=t.sent;case 17:if(l=document.getElementById("search_top"),!(u=l.value)){t.next=23;break}return t.abrupt("return",o.filter((function(t){return t.hashtag.startsWith(u)})));case 23:return t.abrupt("return",o);case 24:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function y(){return g.apply(this,arguments)}function g(){return(g=n(t(r).mark((function e(){var n,o,a;return t(r).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=document.getElementById("board_list")).innerHTML="",o=m(),0===Object.keys(o).length&&(o=p("main","Homepage",!0)),a=b()){t.next=7;break}throw new Error("Active desk not found");case 7:return t.next=9,h(a.id);case 9:t.sent.map((function(t){var e=_(t,a.id);n.appendChild(e)}));case 11:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function _(t,e){var n=document.createElement("div");n.classList.add("board-list__pin--wrap"),n.setAttribute("id","pin_".concat(t.id));var r=document.createElement("div");r.classList.add("board-list__pin"),n.appendChild(r);var o=document.createElement("img");o.classList.add("board-list__pin-img"),o.setAttribute("src",t.imageUrl),o.setAttribute("alt",t.imageUrl),r.appendChild(o);var a=document.createElement("div");a.classList.add("pin-actions-wrapper"),r.appendChild(a);var i=document.createElement("div");if(i.classList.add("pin-actions"),a.appendChild(i),"main"===e){var c=document.createElement("button");c.classList.add("pin-btn","add-pin"),c.textContent="Добавить",i.appendChild(c),c.onclick=function(){l(t.id)}}else{var u=document.createElement("button");u.classList.add("pin-actions__delete-btn"),u.innerHTML="&times;",u.onclick=function(){d(e,t.id)},i.appendChild(u)}var s=document.createElement("button");s.classList.add("pin-btn","complaint-pin"),s.textContent="Пожаловаться",i.appendChild(s);var f=document.createElement("div");f.classList.add("board-list__description--wrapper"),n.appendChild(f);var p=document.createElement("div");p.classList.add("board-list__avatar-wrapper"),f.appendChild(p);var m=document.createElement("img");m.setAttribute("src",t.authorAvatar),m.classList.add("board-list__avatar"),p.appendChild(m);var h=document.createElement("p");return h.classList.add("board-list__description"),h.textContent=t.description,f.appendChild(h),n}function b(){var t=m(),e=Object.keys(t).find((function(e){return t[e].active}));if(e)return t[e]}var E,w={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},L=new Uint8Array(16);function k(){if(!E&&!(E="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(L)}for(var x=[],I=0;I<256;++I)x.push((I+256).toString(16).slice(1));function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(x[t[e+0]]+x[t[e+1]]+x[t[e+2]]+x[t[e+3]]+"-"+x[t[e+4]]+x[t[e+5]]+"-"+x[t[e+6]]+x[t[e+7]]+"-"+x[t[e+8]]+x[t[e+9]]+"-"+x[t[e+10]]+x[t[e+11]]+x[t[e+12]]+x[t[e+13]]+x[t[e+14]]+x[t[e+15]]).toLowerCase()}var O=function(t,e,n){if(w.randomUUID&&!e&&!t)return w.randomUUID();var r=(t=t||{}).random||(t.rng||k)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return S(r)},B=function(){document.getElementById("create_board_modal").style.display="none",j(""),C()},j=function(t){var e=document.querySelector("#crete_board_modal__form-error");t?(e.textContent=t,e.classList.add("visible")):e.classList.contains("visible")&&e.classList.remove("visible")},C=function(){document.querySelector("#create_board_modal__desk-title-input").value="",j("")},N=function(t){t.preventDefault();var e=document.getElementById("crete_board_modal__form").querySelector("#create_board_modal__desk-title-input").value;if(e){var n=m();Object.keys(n).some((function(t){return e===n[t].title}))?j("Desk with same title already exists"):(p(O(),e,!1),C(),B())}else j("Missing desk title")};document.addEventListener("DOMContentLoaded",(function(){y().catch((function(t){console.log(t)})),document.getElementById("create_desk_btn").addEventListener("click",(function(){var t;(t=document.getElementById("create_board_modal"))&&(t.style.display="block")})),document.getElementById("close_create_board_modal").addEventListener("click",(function(){B()})),document.getElementById("crete_board_modal__form").addEventListener("submit",(function(t){N(t)})),document.getElementById("desk_selector").addEventListener("change",(function(t){c(t.target.value)})),document.getElementById("close_select_board_modal").addEventListener("click",(function(){s()})),document.getElementById("select_board_modal__form").addEventListener("submit",(function(t){u(t)})),document.getElementById("search_top").addEventListener("input",(function(){y()}))}))}();
//# sourceMappingURL=index.394301c3.js.map