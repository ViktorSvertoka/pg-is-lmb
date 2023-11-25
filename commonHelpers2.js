import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const a={list:document.querySelector(".js-movie-list"),btnLoad:document.querySelector(".js-load-more")};let e=1;const c=10;a.btnLoad.addEventListener("click",p);async function p(){try{e+=1;const t=await i(e,c);a.list.insertAdjacentHTML("beforeend",d(t.docs)),e>=t.totalPages&&a.btnLoad.classList.add("load-more-hidden")}catch(t){console.error(t)}}async function i(t=1,o=10){const r="https://the-one-api.dev/v2/",l="character",h="fVhH6jhxy5LdB6Ie2Y7P",m=new URLSearchParams({page:t,limit:o}),n=await fetch(`${r}${l}?${m}`,{headers:{Authorization:`Bearer ${h}`}});if(!n.ok)throw new Error(n.statusText||"Error");const s=await n.json();return{docs:s.docs,page:s.page,totalPages:Math.ceil(s.total/o)}}async function u(){try{const t=await i(e,c);a.list.insertAdjacentHTML("afterbegin",d(t.docs)),e<t.totalPages&&a.btnLoad.classList.remove("load-more-hidden")}catch(t){console.error(t)}}u();function d(t){return t.map(({name:o,race:r})=>`
    <li class="character-card">
        <h2>${o}</h2>
        <p>${r}</p>
    </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
