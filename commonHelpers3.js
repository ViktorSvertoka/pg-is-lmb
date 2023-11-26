import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const c={list:document.querySelector(".js-lotr-list")};let e=1;const i=10;let s=!1;window.addEventListener("scroll",u);async function u(){if(window.innerHeight+window.scrollY>=document.body.offsetHeight&&!s)try{s=!0,e+=1;const t=await l(e,i);c.list.insertAdjacentHTML("beforeend",d(t.docs)),e>=t.totalPages}catch(t){console.error(t)}finally{s=!1}}async function l(t=1,a=10){const o="https://the-one-api.dev/v2/",h="character",f="fVhH6jhxy5LdB6Ie2Y7P",p=new URLSearchParams({page:t,limit:a}),r=await fetch(`${o}${h}?${p}`,{headers:{Authorization:`Bearer ${f}`}});if(!r.ok)throw new Error(r.statusText||"Error");const n=await r.json();return{docs:n.docs,page:n.page,totalPages:Math.ceil(n.total/a)}}async function w(){try{const t=await l(e,i);c.list.insertAdjacentHTML("afterbegin",d(t.docs)),e<t.totalPages}catch(t){console.error(t)}}w();function d(t){return t.map(({name:a,race:o})=>`
    <li class="card-list">
        <h2>${a}</h2>
        <p>${o}</p>
    </li>
    `).join("")}
//# sourceMappingURL=commonHelpers3.js.map
