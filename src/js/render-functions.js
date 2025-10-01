import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let imageGallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item"><a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="360" />
          <ul class="img-info">
  <li class="img-info-item">
    <p class="img-info-name">Likes</p>
    <p class="img-info-value">${likes}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Views</p>
    <p class="img-info-value">${views}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Comments</p>
    <p class="img-info-value">${comments}</p>
  </li>
  <li class="img-info-item">
    <p class="img-info-name">Downloads</p>
    <p class="img-info-value">${downloads}</p>
  </li>
</ul>
        </a></li>
        `;
      }
    )
    .join('');

  gallery.innerHTML = markup;

  imageGallery.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('show');
}

export function hideLoader() {
  loader.classList.remove('show');
}
