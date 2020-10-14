const base_url = `https://api.themoviedb.org/3/`;
export const base_poster_url = `https://image.tmdb.org/t/p/w154`;
export const movie_genres_url = `${base_url}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

export const fetchTypes = {
  movies: [
    {
      title: 'Most popular movies',
      url: `${base_url}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    },
    {
      title: 'Top rated movies',
      url: `${base_url}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    },
  ],
  tv: [
    {
      title: 'Most popular series',
      url: `${base_url}tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    },
    {
      title: 'Top rated series',
      url: `${base_url}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    },
  ],
};
