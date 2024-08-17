import axios from 'axios';

export const fetchImages = async params => {
  const { data } = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'fALGFJ4v2oD6wVqz4p4eGwHmTIFeKnOmj0F38cl1zaI',
      per_page: 12,
      query: 'nature',
      ...params,
    },
  });
  return data.results;
};
