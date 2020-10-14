export const base_url = `https://api.themoviedb.org/3/`;
export const base_poster_url = `https://image.tmdb.org/t/p/w154`;

export const fetchTypes = [
  {
    title: 'Most popular movies',
    to: 'movie',
    url: `${base_url}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  },
  {
    title: 'Top rated movies',
    to: 'movie',
    url: `${base_url}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  },

  {
    title: 'Most popular series',
    to: 'tv',
    url: `${base_url}tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  },
  {
    title: 'Top rated series',
    to: 'tv',
    url: `${base_url}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
  },
];
