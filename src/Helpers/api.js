import axios from 'axios';

const API_KEY = '39757407-13e7f5de39700ed4a356d5fcb';

const fetchImages = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};

const api = { fetchImages };

export default api;