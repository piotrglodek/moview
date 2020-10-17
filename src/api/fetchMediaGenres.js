import { base_url, KEY } from './';

export const fetchMediaGenres = async (name, genresArray) => {
  let url = `${base_url}genre/${name}/list?api_key=${KEY}&language=en-US`;
  const response = await fetch(url);
  const json = await response.json();
  const genres = json.genres
    .filter(genre => genresArray.includes(genre.id))
    .map(genre => genre.name);
  return genres;
};
