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
      return {
        ...state,
        results: response.value,
        resultCount: response['@odata.count'] ? response['@odata.count'] : 0,
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

      const url = config.baseUrl
        .replace('{searchTerm}', searchTerm)
        .replace('{maxResults}', config.maxResults)
      const options = {
        headers: {
          'api-key': config.apiKey
        }
      }
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
