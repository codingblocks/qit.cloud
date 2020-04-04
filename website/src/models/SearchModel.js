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
      const encodedAuth = window.btoa(
        config.searchSettings.apiKey + ':' + config.searchSettings.apiSecret
      )
      headers.append('Authorization', `Basic ${encodedAuth}`)
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
      if (!response) {
        console.error(
          'No response returned, are you sure that the index has been configured? See https://github.com/codingblocks/qit.cloud/blob/master/README.md for more details on how to create and populate the search index.'
        )
        if (window && window.alert) {
          // this might be run by the service worker
          window.alert('No response returned, is the search index configured?')
        }
      } else {
        actions.search.updateResults(response)
      }
    }
  }
})
