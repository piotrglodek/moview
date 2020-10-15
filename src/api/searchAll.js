import { base_url } from './static';

export const searchAll = async (name, query) => {
  const url = `${base_url}search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const response = await fetch(url);
  const json = await response.json();

  const data = Promise.all(
    json.results
      .slice(0, 8)
      .filter(
        item => item.media_type !== 'person' && item.genre_ids.length !== 0
      )
  );

  return data;
};
