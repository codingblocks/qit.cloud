import mirror, {actions} from 'mirrorx'
import config from '../config'

export default mirror.model({
  name: 'search',
  initialState: {
    searchTerm: '',
    currentSearch: '',
    results: [],
    loading: false
  },
  reducers: {
    updateSearchTerm (state, searchTerm) {
      return {...state, searchTerm}
    },
    updateResults (state, results) {
      window.gtag('event', 'search', {
        search_term: state.searchTerm
      })
      return {
        ...state,
        results,
        currentSearch: state.searchTerm,
        searchTerm: ''
      }
    },
    startLoading (state) {
      return {...state, loading: true}
    },
    stopLoading (state) {
      return {...state, loading: false}
    },
    clearSearch (state) {
      return {...state, currentSearch: ''}
    }
  },
  effects: {
    async search (searchTerm) {
      actions.search.startLoading()

      const url = config.baseUrl.replace('{searchTerm}', searchTerm)
      const options = {
        headers: {
          'api-key': config.apiKey
        }
      }
      const response = await window.fetch(url, options)
        .then(data => data.json())
        .catch(err => 'An error has occurred: ' + err)

      actions.search.stopLoading()
      actions.search.updateResults(response.value)
    }
  }
})
