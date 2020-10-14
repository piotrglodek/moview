import { base_url } from './static';

export const fetchGenres = async (name, genresArray) => {
  let url = `${base_url}genre/${name}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const response = await fetch(url);
  const json = await response.json();
  const genres = json.genres
    .filter(genre => genresArray.includes(genre.id))
    .map(genre => genre.name);
  return genres;
};
