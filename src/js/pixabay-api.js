import axios from 'axios';

const apiKey = '52412056-74a93e4c5cc0abab5a06c5f26';

export default async function getImagesByQuery(query, page = 1) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: apiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: 15,
    },
  });

  return response.data;
}
