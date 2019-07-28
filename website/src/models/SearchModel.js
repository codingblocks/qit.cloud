import mirror, { actions } from 'mirrorx'

import config from '../config'

export default mirror.model({
  name: 'search',
  initialState: {
    searchTerm: '',
    maxResults: config.maxResults,
    currentSearch: '',
    results: [],
    resultCount: null,
    loading: false
  },
  reducers: {
    updateSearchTerm (state, searchTerm) {
      return { ...state, searchTerm: decodeURIComponent(searchTerm) }
    },
    updateResults (state, response) {
      window.gtag('event', 'search', {
        search_term: state.searchTerm
      })
      // TODO polymorphism?
      if (config.searchSettings.searchEngineType === 'azure') {
        return {
          ...state,
          results: response.value,
          resultCount: response['@odata.count'] ? response['@odata.count'] : 0,
          currentSearch: state.searchTerm,
          searchTerm: ''
        }
      } else {
        const resultsFormatted = response.hits.hits.map(e => {
          return {
            audioUrl: e._source.audio_url,
            episodeDescription: e._source.episodeDescription,
            episode: e._source.episode_number,
            episodeTitle: e._source.episode_title,
            feed: e._source.feed,
            id: e._source.id,
            podcastTitle: e._source.podcast_title,
            published: e._source.published
          }
        })
        return {
          ...state,
          results: resultsFormatted,
          resultCount: response.hits.total.value,
          currentSearch: state.searchTerm,
          searchTerm: ''
        }
      }
    },
    startLoading (state) {
      return { ...state, loading: true }
    },
    stopLoading (state) {
      return { ...state, loading: false }
    },
    clearSearch (state) {
      return { ...state, currentSearch: '', resultCount: null }
    }
  },
  effects: {
    async search (searchTerm) {
      actions.search.startLoading()

      const url =
        config.corsProxy +
        config.searchSettings.baseUrl
          .replace('{searchTerm}', searchTerm)
          .replace('{maxResults}', config.maxResults)

      // TODO better way, polymorphism?
      const headers = new window.Headers()
      if (config.searchSettings.searchEngineType.toLowerCase() === 'azure') {
        headers.append('api-key', config.searchSettings.apiKey)
      } else {
        const encodedAuth = window.btoa(
          config.searchSettings.apiKey + ':' + config.searchSettings.apiSecret
        )
        headers.append('Authorization', `Basic ${encodedAuth}`)
      }
      const options = { method: 'GET', headers: headers }

      const response = await window
        .fetch(url, options)
        .then(data => data.json())
        .catch(err => {
          console.log(`An error has occurred: ${err}`)
          window.errorReporting.notify({
            error: `An error has occurred: ${err}`
          })
        })

      actions.search.stopLoading()
      actions.search.updateResults(response)
    }
  }
})
