import mirror, {actions} from 'mirrorx'
import config from '../config'

export default mirror.model({
  name: 'search',
  initialState: {
    searchTerm: '',
    currentSearch: '',
    results: []
  },
  reducers: {
    updateSearchTerm (state, searchTerm) {
      return {...state, searchTerm }
    },
    updateResults (state, results) {
      return {
        ...state,
        results,
        currentSearch: state.searchTerm,
        searchTerm: ''
      }
    }
  },
  effects: {
    async search (_, getState) {
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

      actions.search.updateResults(response.value)
    }
  }
})
