import { serie_genres_url } from './static';

export const fetchSerieGenres = async (name, genresArray) => {
  const response = await fetch(serie_genres_url);
  const json = await response.json();
  const genres = json.genres
    .filter(genre => genresArray.includes(genre.id))
    .map(genre => genre.name);
  return genres;
};
