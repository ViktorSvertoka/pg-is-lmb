import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const o={list:document.querySelector(".js-lotr-list"),pagination:document.querySelector(".js-pagination")};let c=1;const p=10;let s=0;o.pagination.addEventListener("click",g);async function g(t){if(t.target.tagName==="BUTTON"){const a=parseInt(t.target.dataset.page);a&&a!==c&&(c=a,await d())}}async function d(){try{const t=await h(c,p);o.list.innerHTML=f(t.docs),s=t.totalPages,P()}catch(t){console.error(t)}}async function h(t=1,a=10){const n="https://the-one-api.dev/v2/",e="character",i="fVhH6jhxy5LdB6Ie2Y7P",u=new URLSearchParams({page:t,limit:a}),r=await fetch(`${n}${e}?${u}`,{headers:{Authorization:`Bearer ${i}`}});if(!r.ok)throw new Error(r.statusText||"Error");const l=await r.json();return{docs:l.docs,totalPages:Math.ceil(l.total/a)}}async function m(){await d()}function f(t){return t.map(({name:a,race:n})=>`
      <li class="card-list">
        <h2>${a}</h2>
        <p>${n??"unknown"}</p>
      </li>
    `).join("")}function P(){o.pagination.innerHTML="";const t=10,a=Math.max(c-Math.floor(t/2),1),n=Math.min(a+t-1,s);if(a>1){const e=document.createElement("button");e.textContent="1",e.dataset.page="1",o.pagination.appendChild(e)}for(let e=a;e<=n;e++){const i=document.createElement("button");i.textContent=e,i.dataset.page=e,o.pagination.appendChild(i)}if(n<s){const e=document.createElement("button");e.textContent=s.toString(),e.dataset.page=s.toString(),o.pagination.appendChild(e)}E()}const E=()=>{document.querySelectorAll("button").forEach((t,a)=>{t.classList.remove("active"),a+1===c&&t.classList.add("active")})};m();
//# sourceMappingURL=commonHelpers4.js.map
