const {
  REACT_SEARCH_ENGINE_TYPE, // "azure" or "elasticsearch"
  REACT_APP_BASE_SEARCH_URL,
  REACT_APP_SEARCH_API_KEY,
  REACT_APP_ELASTIC_BASE_SEARCH_URL,
  REACT_APP_ELASTIC_SEARCH_API_KEY,
  REACT_APP_ELASTIC_SEARCH_API_SECRET,
  REACT_APP_BASE_API_URL,
  REACT_APP_CORS_PROXY,
  NODE_ENV,
  REACT_APP_MAX_SEARCH_RESULTS,
  REACT_APP_PLAYBACK_RATES,
  DOCKER
} = process.env

const searchSettings = {
  searchEngineType: REACT_SEARCH_ENGINE_TYPE || 'elasticsearch'
}
if (searchSettings.searchEngineType.toLowerCase() === 'azure') {
  searchSettings.baseUrl =
    REACT_APP_BASE_SEARCH_URL ||
    'https://podcasts.search.windows.net/indexes/podcasts/docs?api-version=2017-11-11&$count=true&$top={maxResults}&queryType=full&search={searchTerm}'
  searchSettings.apiKey =
    REACT_APP_SEARCH_API_KEY || '18EA821D408444FCF3DC3EC4F3790FEC'
} else {
  searchSettings.baseUrl =
    REACT_APP_ELASTIC_BASE_SEARCH_URL ||
    'https://localhost:9200/podcasts/?q={searchTerm}&size={maxResults}'
  searchSettings.apiKey = REACT_APP_ELASTIC_SEARCH_API_KEY || 'elastic'
  searchSettings.apiSecret = REACT_APP_ELASTIC_SEARCH_API_SECRET || 'QITROCKS!'
}

const baseApiUrl =
  REACT_APP_BASE_API_URL ||
  `http://${
    !DOCKER || NODE_ENV === 'development' ? 'coding-blocks-api' : 'localhost'
  }:3005/api/v1`
const corsProxy = REACT_APP_CORS_PROXY || 'https://cors-anywhere.herokuapp.com/'
const maxResults = REACT_APP_MAX_SEARCH_RESULTS || 200

const playbackRates = REACT_APP_PLAYBACK_RATES
  ? REACT_APP_PLAYBACK_RATES.split(',')
  : [1, 1.25, 1.5, 1.75, 2]

export default {
  searchSettings,
  baseApiUrl,
  corsProxy,
  maxResults,
  playbackRates
}
