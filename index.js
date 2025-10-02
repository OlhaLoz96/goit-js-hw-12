import{a as v,S as x,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const S="52412056-74a93e4c5cc0abab5a06c5f26";async function u(i,t=1){return(await v.get("https://pixabay.com/api/",{params:{key:S,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}let q=new x(".gallery-item a",{captionsData:"alt",captionDelay:250});const f=document.querySelector(".gallery"),d=document.querySelector(".loader"),m=document.querySelector(".btn-more");function h(i){const t=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:o,views:l,comments:L,downloads:b})=>`<li class="gallery-item"><a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${s}" alt="${e}" width="360" />
          <ul class="img-info">
  <li class="img-info-item">
    <p class="img-info-name">Likes</p>
    <p class="img-info-value">${o}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Views</p>
    <p class="img-info-value">${l}</p>
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
        `).join("");f.insertAdjacentHTML("beforeend",t),q.refresh()}function M(){f.innerHTML=""}function p(){d.classList.add("show")}function g(){d.classList.remove("show")}function y(){m.classList.add("show-btn-more")}function w(){m.classList.remove("show-btn-more")}const $=document.querySelector(".form");let c="",r=1;$.addEventListener("submit",O);async function O(i){if(i.preventDefault(),M(),w(),r=1,c=i.target.elements["search-text"].value,!c.trim()){n.show({color:"red",message:"❌ Please fill in the field!",position:"topRight"});return}p();try{const t=await u(c,r);if(g(),!t.hits.length){n.show({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"450px"});return}h(t.hits),r<t.totalHits/15?(y(),m.addEventListener("click",P)):n.show({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"450px"})}catch(t){console.log(t)}}async function P(){r+=1,w(),p();try{const i=await u(c,r);g(),h(i.hits);let e=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:e,left:0,behavior:"smooth"}),r<i.totalHits/15?y():n.show({color:"blue",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:"450px"})}catch(i){console.log(i)}}
//# sourceMappingURL=index.js.map
