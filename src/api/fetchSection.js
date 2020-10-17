import { base_url, KEY } from './';

export const fetchSection = async (
  name,
  page,
  getBy,
  discover,
  similar,
  id
) => {
  let url;
  if (getBy) {
    url = `${base_url}${name}/${getBy}?api_key=${KEY}&language=en-US&page=${page}`;
  } else if (discover) {
    url = `${base_url}${discover}/${name}?api_key=${KEY}&language=en-US&page=${page}`;
  } else if (similar) {
    url = `${base_url}${name}/${id}/similar?api_key=${KEY}&language=en-US&page=${page}`;
  } else {
    url = `${base_url}${name}?api_key=${KEY}&language=en-US&page=${page}`;
  }

  const response = await fetch(url);
  const json = await response.json();
  return json;
};
