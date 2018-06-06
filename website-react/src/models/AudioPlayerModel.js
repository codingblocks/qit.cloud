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
    },
    addToPlaylist (state, episode) {
      return {...state, playlist: [...state.playlist, episode]}
    },
    removeFromPlaylist (state, episodeId) {
      const playlist = state.playlist
        .filter(episode => episode.id !== episodeId)
      return {...state, playlist}
    },
    playNextEpisode (state) {
      const currentlyPlaying = state.nowPlaying
      const playlist = state.playlist
        .slice()
        .filter(episode => episode.audioUrl !== currentlyPlaying.audioUrl)
      const nowPlaying = playlist.shift() || {}
      return {...state, nowPlaying, playlist}
    },
    playNext (state, episode) {
      const newPlaylist = state.playlist
        .filter(item => item.audioUrl !== episode.audioUrl)
      return {...state, playlist: [episode, ...newPlaylist]}
    }
  }
})

export const logPlaylist = mirror.hook((action, getState) => {
  if (action.type !== 'player/addToPlaylist') return
  console.log('Playlist: ', getState().player.playlist)
})
