const env = process.env
export default {
  baseUrl:
    env.REACT_APP_BASE_SEARCH_URL ||
    'https://podcasts.search.windows.net/indexes/podcasts/docs?api-version=2017-11-11&$count=true&$top={maxResults}&queryType=full&search={searchTerm}',
  baseApiUrl: env.REACT_APP_BASE_API_URL || 'http://localhost:3005/api/v1',
  corsProxy: env.REACT_APP_CORS_PROXY || 'https://cors-anywhere.herokuapp.com/',
  maxResults: env.REACT_APP_MAX_SEARCH_RESULTS || 200,
  apiKey: env.REACT_APP_SEARCH_API_KEY || '18EA821D408444FCF3DC3EC4F3790FEC',
  playbackRates: env.REACT_APP_PLAYBACK_RATES
    ? env.REACT_APP_PLAYBACK_RATES.split(',')
    : [1, 1.25, 1.5, 1.75, 2]
}
