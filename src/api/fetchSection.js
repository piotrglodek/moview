import { base_url, KEY } from './';

export const fetchSection = async (name, url, page) => {
  let fetchUrl =
    page && name === 'movie'
      ? `${base_url}discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      : page && name === 'tv'
      ? `${base_url}discover/tv?api_key=${KEY}&language=en-US&sort_by=popularity.desc&page=${page}&include_null_first_air_dates=false`
      : url;
  const response = await fetch(fetchUrl);
  const json = await response.json();
  return json;
};
