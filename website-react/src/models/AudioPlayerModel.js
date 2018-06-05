import mirror from 'mirrorx'
import config from '../config'

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
      const playlist = state.playlist.filter(
        episode => episode.id !== episodeId
      )
      return {...state, playlist}
    },
    playNextEpisode (state) {
      const playlist = state.playlist.slice()
      const nowPlaying = playlist.shift()
      return {...state, nowPlaying, playlist}
    }
  }
})

export const logPlaylist = mirror.hook((action, getState) => {
  if (action.type !== 'player/addToPlaylist') return
  console.log('Playlist: ', getState().player.playlist)
})
