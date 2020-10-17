import { base_url, KEY } from './';

export const search = async (name, query) => {
  const url = `${base_url}search/multi?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const response = await fetch(url);
  const json = await response.json();

  const data = Promise.all(
    json.results
      .slice(0, 8)
      .filter(
        item =>
          item.media_type !== 'person' &&
          item.genre_ids.length &&
          item.poster_path &&
          item.vote_average !== 0
      )
      .sort((a, b) => b.vote_average - a.vote_average)
  );

  return data;
};
