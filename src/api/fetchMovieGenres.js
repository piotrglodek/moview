import { movie_genres_url } from './static';

export const fetchMovieGenres = async genresArray => {
  const response = await fetch(movie_genres_url);
  const json = await response.json();

  return json.genres.filter(genre => genresArray.includes(genre.id));
};
