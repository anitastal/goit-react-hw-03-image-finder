import axios from 'axios';

const imageApi = axios.create({
  baseURL: `https://pixabay.com/api`,
  params: {
    key: '30084767-7a1e2118a8f7c64e4377bd167',
    // image_type: 'photo',
    // orientation: 'horizontal',
    // per_page: 12,
    // page: 1,
  },
});
export const getImages = async (query, page) => {
  const { data } = await imageApi.get('/', {
    params: {
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page,
    },
  });
  return data.hits;
};

// ??++++++++++++++++++++++++++++++++++++++++++++++

// const getImages = async images =>{
//   const response = await axios.get(
//     'https://pixabay.com/api/?q=${images}&key=30084767-7a1e2118a8f7c64e4377bd167&per_page=20'
//   );
// return response.data}

// async function getImages() {
//   // const KEY = `?key=30084767-7a1e2118a8f7c64e4377bd167&per_page=12`;
//   // const BASE_URL = `https://pixabay.com/api/${KEY}`;
//   const { data } = await axios.get(
//     `https://pixabay.com/api/?key=30084767-7a1e2118a8f7c64e4377bd167&per_page=20`
//   );
//   console.log(data);
//   return data;
// }
// export default getImages;
