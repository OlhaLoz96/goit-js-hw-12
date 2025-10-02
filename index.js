import{a as x,S as v,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const S="52412056-74a93e4c5cc0abab5a06c5f26";async function u(r,t=1){return(await x.get("https://pixabay.com/api/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}let q=new v(".gallery-item a",{captionsData:"alt",captionDelay:250});const d=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".btn-more");function p(r){const t=r.map(({webformatURL:a,largeImageURL:l,tags:e,likes:o,views:n,comments:L,downloads:b})=>`<li class="gallery-item"><a class="gallery-link" href="${l}">
          <img class="gallery-image" src="${a}" alt="${e}" width="360" />
          <ul class="img-info">
  <li class="img-info-item">
    <p class="img-info-name">Likes</p>
    <p class="img-info-value">${o}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Views</p>
    <p class="img-info-value">${n}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Comments</p>
    <p class="img-info-value">${L}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Downloads</p>
    <p class="img-info-value">${b}</p>
  </li>
</ul>
        </a></li>
        `).join("");d.insertAdjacentHTML("beforeend",t),q.refresh()}function P(){d.innerHTML=""}function f(){h.classList.add("show")}function g(){h.classList.remove("show")}function y(){m.classList.add("show-btn-more")}function w(){m.classList.remove("show-btn-more")}const M=document.querySelector(".form");let c="",s=1;M.addEventListener("submit",R);m.addEventListener("click",W);async function R(r){if(r.preventDefault(),P(),w(),s=1,c=r.target.elements["search-text"].value,!c.trim()){i.show({color:"red",message:"❌ Please fill in the field!",position:"topRight"});return}f();try{const t=await u(c,s);if(!t.hits.length){i.show({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"450px"});return}p(t.hits),s<t.totalHits/15?y():i.show({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"450px"})}catch(t){console.log(t),i.show({color:"red",message:"❌ Sorry, an error occurred. Please try again!",position:"topRight",maxWidth:"450px"})}finally{g()}}async function W(){s+=1,w(),f();try{const r=await u(c,s);p(r.hits);let e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,left:0,behavior:"smooth"}),s<r.totalHits/15?y():i.show({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"450px"})}catch(r){console.log(r),i.show({color:"red",message:"❌ Sorry, an error occurred. Please try again!",position:"topRight",maxWidth:"450px"})}finally{g()}}
//# sourceMappingURL=index.js.map
