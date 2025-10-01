import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  const queryText = event.target.elements['search-text'].value;
  if (!queryText.trim()) {
    iziToast.show({
      color: 'red',
      message: `❌ Please fill in the field!`,
      position: 'topRight',
    });
    return;
  }
  showLoader();
  getImagesByQuery(queryText)
    .then(res => {
      hideLoader();
      //   console.log(res.hits);
      if (!res.hits.length) {
        iziToast.show({
          color: 'red',
          message: `❌ Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
          maxWidth: '450px',
        });
        return;
      }
      createGallery(res.hits);
    })
    .catch(error => {
      console.log(error);
    });
}
