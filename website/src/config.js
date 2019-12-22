const {
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
  baseUrl:
    REACT_APP_ELASTIC_BASE_SEARCH_URL ||
    `http://localhost:9200/podcasts/_search?q={searchTerm}&size={maxResults}`,
  apiKey: REACT_APP_ELASTIC_SEARCH_API_KEY || 'elastic',
  apiSecret: REACT_APP_ELASTIC_SEARCH_API_SECRET || 'QITROCKS!'
}

const baseApiUrl =
  REACT_APP_BASE_API_URL ||
  `http://${
    !DOCKER || NODE_ENV === 'development' ? 'api' : 'localhost'
  }:3005/api/v1`
const corsProxy = REACT_APP_CORS_PROXY || ''
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
