import { base_url, KEY } from './';

export const fetchMedia = async (name, id) => {
  let url = `${base_url}${name}/${id}?api_key=${KEY}&language=en-US`;
  const response = await fetch(url);
  const json = await response.json();

  return json;
};
