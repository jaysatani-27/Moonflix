const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };


// apiEndPointUrl = api.themoviedb.org/3/movie/157336?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4 