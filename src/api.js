import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhotos = async (query, page) => {
  const response = await axios.get(`?key=37696305-6a7afe6a6eccc7277829ccd16&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
  return response.data;
}