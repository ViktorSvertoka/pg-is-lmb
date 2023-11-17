import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const t={list:document.querySelector(".js-movie-list"),btnLoad:document.querySelector(".js-load-more")};let i=499;t.btnLoad.addEventListener("click",d);function d(){i+=1,c(i).then(e=>{t.list.insertAdjacentHTML("beforeend",l(e.results)),(e.page>=500||e.page>=e.total_pages)&&t.btnLoad.classList.replace("load-more","load-more-hidden")})}function c(e=1){const n="https://api.themoviedb.org/3",o="trending/movie/week",s="345007f9ab440e5b86cef51be6397df1",r=new URLSearchParams({api_key:s,page:e});return console.log(r.toString()),fetch(`${n}/${o}?${r}`).then(a=>{if(!a.ok)throw new Error(a.statusText||"Error");return a.json()})}c().then(e=>{t.list.insertAdjacentHTML("afterbegin",l(e.results)),e.page<e.total_pages&&t.btnLoad.classList.replace("load-more-hidden","load-more")}).catch(e=>console.log(e));function l(e){return e.map(({poster_path:n,original_title:o,release_date:s,vote_average:r})=>`
    <li class="movie-card">
        <img src="https://image.tmdb.org/t/p/w300${n}" alt="${o}" />
        <h2>${o}</h2>
        <div class="movie-info">
            <p>Release Date: ${s}</p>
            <p>Vote Average: ${r}</p>
        </div>
    </li>
    `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
