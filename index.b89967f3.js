const e=()=>{const e=document.getElementById("desk_selector"),t=c();for(let n of Object.keys(t)){const o=t[n],d=document.createElement("option");d.setAttribute("value",n),d.innerHTML=o.title,o.active&&d.setAttribute("selected","selected"),e.appendChild(d)}},t=()=>{document.getElementById("desk_selector").innerHTML="",e()};function n(e){o(e),a().catch((e=>{console.log(e)}))}function o(e){const t=c();for(let n of Object.keys(t))t[n].active=e===n;localStorage.setItem("desks",JSON.stringify(t))}function d(e,n,o){const d=c();return d[e]={id:e,title:n,active:o},localStorage.setItem("desks",JSON.stringify(d)),t(),d}function c(){const e=localStorage.getItem("desks");return e?JSON.parse(e):{}}async function a(){const e=document.getElementById("board_list");e.innerHTML="";let t=c();0===Object.keys(t).length&&(t=d("main","Homepage",!0));const n=function(){const e=c(),t=Object.keys(e).find((t=>e[t].active));if(t)return e[t]}();if(!n)throw new Error("Active desk not found");(await async function(e){if("main"===e)return(await fetch("https://63052f15697408f7edc32802.mockapi.io/api/v1/card",{method:"get"})).json();return console.log("Fetch from localstorage"),[]}(n.id)).map((t=>{const n=function(e){const t=document.createElement("div");t.classList.add("board-list__pin--wrap");const n=document.createElement("div");n.classList.add("board-list__pin"),t.appendChild(n);const o=document.createElement("img");o.classList.add("board-list__pin-img"),o.setAttribute("src",e.imageUrl),o.setAttribute("alt",e.imageUrl),n.appendChild(o);const d=document.createElement("div");d.classList.add("pin-actions-wrapper"),n.appendChild(d);const c=document.createElement("div");c.classList.add("pin-actions"),d.appendChild(c);const a=document.createElement("button");a.classList.add("pin-btn","add-pin"),a.textContent="Добавить",c.appendChild(a),a.onclick=()=>{console.log(e.id)};const s=document.createElement("button");s.classList.add("pin-btn","complaint-pin"),s.textContent="Пожаловаться",c.appendChild(s);const r=document.createElement("div");r.classList.add("board-list__description--wrapper"),t.appendChild(r);const i=document.createElement("div");r.classList.add("board-list__avatar-wrapper"),r.appendChild(i);const l=document.createElement("img");l.setAttribute("src",e.authorAvatar),l.classList.add("board-list__avatar"),i.appendChild(l);const m=document.createElement("p");return m.classList.add("board-list__description"),m.textContent=e.description,r.appendChild(m),t}(t);e.appendChild(n)}))}e();var s={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let r;const i=new Uint8Array(16);function l(){if(!r&&(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}const m=[];for(let e=0;e<256;++e)m.push((e+256).toString(16).slice(1));function u(e,t=0){return(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase()}var p=function(e,t,n){if(s.randomUUID&&!t&&!e)return s.randomUUID();const o=(e=e||{}).random||(e.rng||l)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return u(o)};const _=()=>{const e=document.getElementById("create_board_modal");e&&(e.style.display="block")},f=()=>{document.getElementById("create_board_modal").style.display="none",b("")},b=e=>{const t=document.querySelector("#crete_board_modal_form_error");e?(t.textContent=e,t.classList.add("visible")):t.classList.contains("visible")&&t.classList.remove("visible")},g=e=>{e.preventDefault();const t=document.getElementById("crete_board_modal_form").querySelector("#create_board_modal_desk_title_input").value;if(!t)return void b("Missing desk title");const n=c();Object.keys(n).some((e=>t===n[e].title))?b("Desk with same title already exists"):(d(p(),t,!1),document.querySelector("#create_board_modal_desk_title_input").value="",b(""),f())};document.addEventListener("DOMContentLoaded",(()=>{a().catch((e=>{console.log(e)})),document.getElementById("create_desk_btn").addEventListener("click",(()=>{_()})),document.getElementById("close_create_board_modal").addEventListener("click",(()=>{f()})),document.getElementById("crete_board_modal_form").addEventListener("submit",(e=>{g(e)})),document.getElementById("desk_selector").addEventListener("change",(e=>{n(e.target.value)}))}));
//# sourceMappingURL=index.b89967f3.js.map
