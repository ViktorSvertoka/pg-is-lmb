import{l as w,A as v}from"./assets/lightbox-280c1b4a.js";/* empty css                     */import{i as r}from"./assets/vendor-a94593f8.js";const E=document.getElementById("search-button"),u=document.querySelector(".gallery"),i=document.querySelector("#search-bar"),a=document.querySelector(".btn__load-more");let o=0;const n=new v;let c=!0;E.addEventListener("click",p);i.addEventListener("keydown",function(e){e.key==="Enter"&&(e.preventDefault(),p()),c=!0});function p(){const e=i.value.trim();if(u.innerHTML="",n.query=e,n.resetPage(),e===""){S("Please, fill the main field");return}i.value="",o=0,f()}async function f(){try{const e=await n.fetchGallery(),{hits:t,totalHits:s}=e;if(!t.length){l("Sorry, there are no images matching your search query. Please try again.");return}c&&o<s&&(_(`Hooray! We found ${s} images !!!`),c=!1,a.classList.remove("is-hidden")),k(t),o+=t.length,o>=s&&(a.classList.add("is-hidden"),L("You've reached the end of search results."))}catch(e){console.error("Error fetching gallery:",e),l("An error occurred while fetching the gallery.")}}function k(e){const t=e.map(({webformatURL:s,largeImageURL:h,tags:d,likes:m,views:g,comments:y,downloads:b})=>`
      <div class="photo-card">
        <a href="${h}">
          <img class="photo-img" src="${s}" alt="${d}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span class="info__span">${m}</span></p>
          <p class="info-item"><b>Views</b><span class="info__span">${g}</span></p>
          <p class="info-item"><b>Comments</b><span class="info__span">${y}</span></p>
          <p class="info-item"><b>Downloads</b><span class="info__span">${b}</span></p>
        </div>
      </div>`).join("");u.insertAdjacentHTML("beforeend",t),w.refresh()}a.addEventListener("click",()=>{n.incrementPage(),f()});function S(e){r.warning({title:"Warning",message:e,position:"topRight",color:"yellow",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}function l(e){r.error({title:"Error",message:e,position:"topRight",color:"red",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}function _(e){r.success({title:"Success",message:e,position:"topRight",color:"green",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}function L(e){r.info({title:"Info",message:e,position:"topRight",color:"blue",timeout:2e3,closeOnEscape:!0,closeOnClick:!0})}
//# sourceMappingURL=commonHelpers4.js.map
