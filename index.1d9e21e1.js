const e=()=>{const e=document.getElementById("desk_selector"),t=i();for(let n of Object.keys(t)){const o=t[n],d=document.createElement("option");d.setAttribute("value",n),d.innerHTML=o.title,o.active&&d.setAttribute("selected","selected"),e.appendChild(d)}},t=()=>{document.getElementById("desk_selector").innerHTML="",e()};function n(e){s(e),r().catch((e=>{console.log(e)}))}e();const o=e=>{document.getElementById("select_board_modal").classList.add("visible");document.getElementById("select_board_modal_pin_id").value=e,document.getElementById("select_board_modal_selector").innerHTML="",function(){const e=document.getElementById("select_board_modal_selector"),t=i();for(let n of Object.keys(t)){if("main"===n)continue;const o=t[n],d=document.createElement("option");d.setAttribute("value",n),d.innerHTML=o.title,e.appendChild(d)}}()};function d(e){e.preventDefault();const t=document.getElementById("select_board_modal_pin_id").value,n=document.getElementById("select_board_modal_selector").value,o=localStorage.getItem(`desk-pins-${n}`);let d;d=o?new Set(JSON.parse(o)):new Set,d.add(t),localStorage.setItem(`desk-pins-${n}`,JSON.stringify(Array.from(d))),a()}function a(){document.getElementById("select_board_modal").classList.remove("visible")}function s(e){const t=i();for(let n of Object.keys(t))t[n].active=e===n;localStorage.setItem("desks",JSON.stringify(t))}function c(e,n,o){const d=i();return d[e]={id:e,title:n,active:o},localStorage.setItem("desks",JSON.stringify(d)),t(),d}function i(){const e=localStorage.getItem("desks");return e?JSON.parse(e):{}}async function r(){const e=document.getElementById("board_list");e.innerHTML="";let t=i();0===Object.keys(t).length&&(t=c("main","Homepage",!0));const n=function(){const e=i(),t=Object.keys(e).find((t=>e[t].active));if(t)return e[t]}();if(!n)throw new Error("Active desk not found");(await async function(e){let t=[];if("main"===e){const e=await fetch("https://63052f15697408f7edc32802.mockapi.io/api/v1/card",{method:"get"});t=await e.json()}else{const n=localStorage.getItem(`desk-pins-${e}`);if(n){pinIds=JSON.parse(n);const e=pinIds.map((e=>fetch(`https://63052f15697408f7edc32802.mockapi.io/api/v1/card/${e}`,{method:"get"}).then((e=>e.json()))));t=await Promise.all(e)}}const n=document.getElementById("search_top").value;return n?t.filter((e=>e.hashtag.startsWith(n))):t}(n.id)).map((t=>{const n=function(e){const t=document.createElement("div");t.classList.add("board-list__pin--wrap");const n=document.createElement("div");n.classList.add("board-list__pin"),t.appendChild(n);const d=document.createElement("img");d.classList.add("board-list__pin-img"),d.setAttribute("src",e.imageUrl),d.setAttribute("alt",e.imageUrl),n.appendChild(d);const a=document.createElement("div");a.classList.add("pin-actions-wrapper"),n.appendChild(a);const s=document.createElement("div");s.classList.add("pin-actions"),a.appendChild(s);const c=document.createElement("button");c.classList.add("pin-btn","add-pin"),c.textContent="Добавить",s.appendChild(c),c.onclick=()=>{o(e.id)};const i=document.createElement("button");i.classList.add("pin-btn","complaint-pin"),i.textContent="Пожаловаться",s.appendChild(i);const r=document.createElement("div");r.classList.add("board-list__description--wrapper"),t.appendChild(r);const l=document.createElement("div");l.classList.add("board-list__avatar-wrapper"),r.appendChild(l);const m=document.createElement("img");m.setAttribute("src",e.authorAvatar),m.classList.add("board-list__avatar"),l.appendChild(m);const u=document.createElement("p");return u.classList.add("board-list__description"),u.textContent=e.description,r.appendChild(u),t}(t);e.appendChild(n)}))}var l={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const u=new Uint8Array(16);function p(){if(!m&&(m="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(u)}const _=[];for(let e=0;e<256;++e)_.push((e+256).toString(16).slice(1));function g(e,t=0){return(_[e[t+0]]+_[e[t+1]]+_[e[t+2]]+_[e[t+3]]+"-"+_[e[t+4]]+_[e[t+5]]+"-"+_[e[t+6]]+_[e[t+7]]+"-"+_[e[t+8]]+_[e[t+9]]+"-"+_[e[t+10]]+_[e[t+11]]+_[e[t+12]]+_[e[t+13]]+_[e[t+14]]+_[e[t+15]]).toLowerCase()}var f=function(e,t,n){if(l.randomUUID&&!t&&!e)return l.randomUUID();const o=(e=e||{}).random||(e.rng||p)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return g(o)};const b=()=>{const e=document.getElementById("create_board_modal");e&&(e.style.display="block")},y=()=>{document.getElementById("create_board_modal").style.display="none",v("")},v=e=>{const t=document.querySelector("#crete_board_modal__form-error");e?(t.textContent=e,t.classList.add("visible")):t.classList.contains("visible")&&t.classList.remove("visible")},E=e=>{e.preventDefault();const t=document.getElementById("crete_board_modal__form").querySelector("#create_board_modal__desk-title-input").value;if(!t)return void v("Missing desk title");const n=i();Object.keys(n).some((e=>t===n[e].title))?v("Desk with same title already exists"):(c(f(),t,!1),document.querySelector("#create_board_modal__desk-title-input").value="",v(""),y())};document.addEventListener("DOMContentLoaded",(()=>{r().catch((e=>{console.log(e)})),document.getElementById("create_desk_btn").addEventListener("click",(()=>{b()})),document.getElementById("close_create_board_modal").addEventListener("click",(()=>{y()})),document.getElementById("crete_board_modal__form").addEventListener("submit",(e=>{E(e)})),document.getElementById("desk_selector").addEventListener("change",(e=>{n(e.target.value)})),document.getElementById("close_select_board_modal").addEventListener("click",(()=>{a()})),document.getElementById("select_board_modal__form").addEventListener("submit",(e=>{d(e)})),document.getElementById("search_top").addEventListener("input",(()=>{r()}))}));
//# sourceMappingURL=index.1d9e21e1.js.map
