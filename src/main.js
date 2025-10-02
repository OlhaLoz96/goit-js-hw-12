import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  btnMore,
} from './js/render-functions.js';

const form = document.querySelector('.form');
let queryText = '';
let page = 1;

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  page = 1;

  queryText = event.target.elements['search-text'].value;
  if (!queryText.trim()) {
    iziToast.show({
      color: 'red',
      message: `❌ Please fill in the field!`,
      position: 'topRight',
    });
    return;
  }

  showLoader();

  try {
    const res = await getImagesByQuery(queryText, page);
    hideLoader();
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

    if (page < res.totalHits / 15) {
      showLoadMoreButton();
      btnMore.addEventListener('click', onLoadMore);
    } else {
      iziToast.show({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
        maxWidth: '450px',
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function onLoadMore() {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(queryText, page);
    hideLoader();
    createGallery(data.hits);

    // scroll
    let elem = document.querySelector('.gallery-item');
    let rect = elem.getBoundingClientRect();
    let height = rect.height;
    let heightScroll = height * 2;

    window.scrollBy({
      top: heightScroll,
      left: 0,
      behavior: 'smooth',
    });
    //

    if (page < data.totalHits / 15) {
      showLoadMoreButton();
    } else {
      iziToast.show({
        color: 'blue',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
        maxWidth: '450px',
      });
    }
  } catch (error) {
    console.log(error);
  }
}
