import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const a={list:document.querySelector(".js-lotr-list"),btnLoad:document.querySelector(".js-load-more")};let e=1;const c=10;a.btnLoad.addEventListener("click",u);async function u(){try{e+=1;const t=await i(e,c);a.list.insertAdjacentHTML("beforeend",d(t.docs)),e>=t.totalPages&&a.btnLoad.classList.add("js-hidden")}catch(t){console.error(t)}}async function i(t=1,o=10){const r="https://the-one-api.dev/v2/",l="character",h="fVhH6jhxy5LdB6Ie2Y7P",p=new URLSearchParams({page:t,limit:o}),s=await fetch(`${r}${l}?${p}`,{headers:{Authorization:`Bearer ${h}`}});if(!s.ok)throw new Error(s.statusText||"Error");const n=await s.json();return{docs:n.docs,page:n.page,totalPages:Math.ceil(n.total/o)}}async function L(){try{const t=await i(e,c);a.list.insertAdjacentHTML("afterbegin",d(t.docs)),e<t.totalPages&&a.btnLoad.classList.remove("js-hidden")}catch(t){console.error(t)}}L();function d(t){return t.map(({name:o,race:r})=>`
    <li class="card-list">
        <h2>${o}</h2>
        <p>${r}</p>
    </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
