import mirror from 'mirrorx'

export default mirror.model({
  name: 'player',
  initialState: {
    nowPlaying: {},
    playlist: []
  },
  reducers: {
    play (state, episode) {
      window.gtag('event', 'play', {
        'event_category' : 'audio',
        'event_label' : episode.audioUrl
      })
      return {...state, nowPlaying: episode}
    },
    addToPlaylist (state, episode) {
      window.gtag('event', 'add_to_playlist', {
        'event_category' : 'audio',
        'event_label' : episode.audioUrl
      })
      return {...state, playlist: [...state.playlist, episode]}
    },
    removeFromPlaylist (state, episodeId) {
      const playlist = state.playlist
        .filter(episode => episode.id !== episodeId)
      window.gtag('event', 'remove_from_playlist', {
        'event_category' : 'audio',
        'event_label' : episodeId
      })
      return {...state, playlist}
    },
    playNextEpisode (state) {
      const currentlyPlaying = state.nowPlaying
      const playlist = state.playlist
        .slice()
        .filter(episode => episode.audioUrl !== currentlyPlaying.audioUrl)
      const nowPlaying = playlist.shift() || {}
      window.gtag('event', 'play_next_episode', {
        'event_category' : 'audio',
        'event_label' : (nowPlaying || {}).audioUrl
      })
      return {...state, nowPlaying, playlist}
    },
    playNext (state, episode) {
      const newPlaylist = state.playlist
        .filter(item => item.audioUrl !== episode.audioUrl)
        window.gtag('event', 'play_next', {
          'event_category' : 'audio',
          'event_label' : episode.audioUrl
        })
      return {...state, playlist: [episode, ...newPlaylist]}
    }
  }
})

export const logPlaylist = mirror.hook((action, getState) => {
  if (action.type !== 'player/addToPlaylist') return
  console.log('Playlist: ', getState().player.playlist)
})
