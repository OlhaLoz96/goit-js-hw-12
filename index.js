import{a as f,S as p,i as l}from"./assets/vendor-BSTwZ_tR.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="52412056-74a93e4c5cc0abab5a06c5f26";function d(r){return f.get("https://pixabay.com/api/",{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(i=>i.data)}let h=new p(".gallery-item a",{captionsData:"alt",captionDelay:250});const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(r){const i=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:m,downloads:u})=>`<li class="gallery-item"><a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${o}" alt="${e}" width="360" />
          <ul class="img-info">
  <li class="img-info-item">
    <p class="img-info-name">Likes</p>
    <p class="img-info-value">${t}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Views</p>
    <p class="img-info-value">${s}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Comments</p>
    <p class="img-info-value">${m}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Downloads</p>
    <p class="img-info-value">${u}</p>
  </li>
</ul>
        </a></li>
        `).join("");n.innerHTML=i,h.refresh()}function L(){n.innerHTML=""}function w(){c.classList.add("show")}function b(){c.classList.remove("show")}const v=document.querySelector(".form");v.addEventListener("submit",S);function S(r){r.preventDefault(),L();const i=r.target.elements["search-text"].value;if(!i.trim()){l.show({color:"red",message:"❌ Please fill in the field!",position:"topRight"});return}w(),d(i).then(o=>{if(b(),!o.hits.length){l.show({color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"450px"});return}y(o.hits)}).catch(o=>{console.log(o)})}
//# sourceMappingURL=index.js.map
