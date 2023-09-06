// components/api.js

// import axios from 'axios';

// const API_KEY = '38393469-c3ed0194fa41e0d5130fcf9c2';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// export const fetchData = async (query, page = 1, perPage = 12) => {
//   try {
//     const response = await axios.get('', {
//       params: {
//         key: API_KEY,
//         q: query,
//         page: page,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         per_page: perPage,
//       },
//     });

//     if (response.data.totalHits > 0) {
//       return response.data.hits;
//     } else {
//       return [];
//     }
//   } catch (error) {
//     console.error('Error fetching data from Pixabay API:', error);
//     throw error;
//   }
// };

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38393469-c3ed0194fa41e0d5130fcf9c2';

export const fetchData = async ({ query, page }) => {
  const response = await axios.get(
    `/?q=${query.slice(
      query.indexOf('/') + 1,
      query.length
    )}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
