import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWVhOTM5ZTI1NTc1M2M0NDI0ZmQyZTA2YzkyNDViMyIsIm5iZiI6MTcyNDE1MjIwNi42NTk4MDEsInN1YiI6IjY2YzFlY2FhYjg2NTNmMmUxZDg5YTRlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yNSN7Hb_Wj9_p8i96dN5uo4yGgQnsvNva0c_3_gXceY';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.headers.common['Authorization'] = API_KEY;

export const fetchTrendMovies = async () => {
  const { data } = await axios.get('/trending/movie/week');
  return data.results;
};

export const fetchSingleMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const searchMovie = async query => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};
