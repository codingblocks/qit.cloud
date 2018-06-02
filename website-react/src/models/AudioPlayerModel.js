import mirror from 'mirrorx'

export default mirror.model({
  name: 'player',
  initialState: {
    nowPlaying: {},
    playlist: []
  },
  reducers: {
    play (state, episode) {
      return {...state, nowPlaying: episode}
    }
  }
})
