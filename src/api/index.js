export const base_url = `https://api.themoviedb.org/3/`;
export const base_poster_url = `https://image.tmdb.org/t/p/`;
export const KEY = process.env.REACT_APP_API_KEY;

export { fetchMediaGenres } from './fetchMediaGenres';
export { fetchSection } from './fetchSection';
export { search } from './search';
export { fetchMedia } from './fetchMedia';

export const apiSections = [
  {
    title: 'Most popular movies',
    mediaType: 'movie',
    getBy: 'popular',
  },
  {
    title: 'Top rated movies',
    mediaType: 'movie',
    getBy: 'top_rated',
  },

  {
    title: 'Most popular series',
    mediaType: 'tv',
    getBy: 'popular',
  },
  {
    title: 'Top rated series',
    mediaType: 'tv',
    getBy: 'top_rated',
  },
];
