import{l as E,A as w}from"./assets/lightbox-280c1b4a.js";/* empty css                     */import{i}from"./assets/vendor-a94593f8.js";const O=document.getElementById("search-button"),a=document.querySelector(".gallery"),c=document.querySelector("#search-bar");let o=0;const r=new w;let l=!0;O.addEventListener("click",h);c.addEventListener("keydown",function(e){e.key==="Enter"&&(e.preventDefault(),h()),l=!0});function h(){const e=c.value.trim();if(a.innerHTML="",r.query=e,r.resetPage(),e===""){C("Please, fill the main field");return}c.value="",o=0,m()}async function m(){try{const e=await r.fetchGallery(),{hits:n,totalHits:t}=e;if(!n.length){p("Sorry, there are no images matching your search query. Please try again.");return}l&&o<t&&($(`Hooray! We found ${t} images !!!`),l=!1),k(n),o+=n.length;const s=a.lastElementChild;s&&u.observe(s),o>=t&&(u.disconnect(),I("You've reached the end of search results."))}catch(e){console.error("Error fetching gallery:",e),p("An error occurred while fetching the gallery.")}}function k(e){const n=e.map(({webformatURL:t,largeImageURL:s,tags:g,likes:d,views:y,comments:b,downloads:v})=>`
      <div class="photo-card">
        <a href="${s}">
          <img class="photo-img" src="${t}" alt="${g}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span class="info__span">${d}</span></p>
          <p class="info-item"><b>Views</b><span class="info__span">${y}</span></p>
          <p class="info-item"><b>Comments</b><span class="info__span">${b}</span></p>
          <p class="info-item"><b>Downloads</b><span class="info__span">${v}</span></p>
        </div>
      </div>`).join("");a.insertAdjacentHTML("beforeend",n),E.refresh()}const S={root:null,rootMargin:"0px",threshold:.5},u=new IntersectionObserver(_,S);function _(e,n){e.forEach(t=>{t.isIntersecting&&(r.incrementPage(),m())})}const f=a.firstElementChild;f&&u.observe(f);function C(e){i.warning({title:"Warning",message:e,position:"topRight",color:"yellow",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}function p(e){i.error({title:"Error",message:e,position:"topRight",color:"red",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}function $(e){i.success({title:"Success",message:e,position:"topRight",color:"green",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}function I(e){i.info({title:"Info",message:e,position:"topRight",color:"blue",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}
//# sourceMappingURL=commonHelpers3.js.map
