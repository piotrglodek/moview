export const base_url = `https://api.themoviedb.org/3/`;
export const base_poster_url = `https://image.tmdb.org/t/p/w154`;
export const KEY = process.env.REACT_APP_API_KEY;

export { fetchGenres } from './fetchGenres';
export { fetchSection } from './fetchSection';
export { search } from './search';

export const apiSections = [
  {
    title: 'Most popular movies',
    mediaType: 'movie',
    url: `${base_url}movie/popular?api_key=${KEY}&language=en-US&page=1`,
  },
  {
    title: 'Top rated movies',
    mediaType: 'movie',
    url: `${base_url}movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  },

  {
    title: 'Most popular series',
    mediaType: 'tv',
    url: `${base_url}tv/popular?api_key=${KEY}&language=en-US&page=1`,
  },
  {
    title: 'Top rated series',
    mediaType: 'tv',
    url: `${base_url}tv/top_rated?api_key=${KEY}&language=en-US&page=1`,
  },
];
