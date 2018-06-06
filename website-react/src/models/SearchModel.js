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
      return {...state, searchTerm }
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
    async search (_, getState) {
      actions.search.startLoading()

      const searchTerm = getState().search.searchTerm
      const url = config.baseUrl + searchTerm
      const options = {
        headers: {
          'api-key': config.apiKey
        }
      }
      const response = await fetch(url, options)
        .then(data => data.json())
        .catch(err => 'An error has occurred.')

      actions.search.stopLoading()
      actions.search.updateResults(response.value)
    }
  }
})
