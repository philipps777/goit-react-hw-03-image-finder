import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38393469-c3ed0194fa41e0d5130fcf9c2';

export const fetchData = async ({ query, page }) => {
  try {
    if (!query || query.trim() === '') {
      throw new Error('Invalid query');
    }

    const queryWithoutSlash = query.slice(query.indexOf('/') + 1);

    const response = await axios.get(
      `/?q=${queryWithoutSlash}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
