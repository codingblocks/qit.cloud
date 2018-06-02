import mirror from 'mirrorx'

export default mirror.model({
  name: 'player',
  initialState: {
    source: '',
  },
  reducers: {
    updateSource (state, source) {
      return {...state, source}
    }
  }
})
