import mirror from 'mirrorx'

const getEpisodeById = (playlist, episodeId) => {
  return playlist
    ? playlist.find(episode => episode.id === episodeId)
    : null
}

const gtag = window.gtag

export default mirror.model({
  name: 'player',
  initialState: {
    nowPlaying: {},
    playlist: []
  },
  reducers: {
    play (state, episode) {
      gtag('event', 'play', {
        'event_category': 'audio',
        'event_label': episode.audioUrl
      })
      return {...state, nowPlaying: episode}
    },
    addToPlaylist (state, episode) {
      gtag('event', 'add_to_playlist', {
        'event_category': 'audio',
        'event_label': episode.audioUrl
      })
      return {...state, playlist: [...state.playlist, episode]}
    },
    removeFromPlaylist (state, episodeId) {
      const removedEpisode = getEpisodeById(state.playlist, episodeId)

      if (removedEpisode) {
        gtag('event', 'remove_from_playlist', {
          'event_category': 'audio',
          'event_label': removedEpisode.audioUrl
        })
      }

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
      gtag('event', 'play_next_episode', {
        'event_category': 'audio',
        'event_label': (nowPlaying || {}).audioUrl
      })
      return {...state, nowPlaying, playlist}
    },
    playNext (state, episode) {
      const newPlaylist = state.playlist
        .filter(item => item.audioUrl !== episode.audioUrl)
      gtag('event', 'play_next', {
        'event_category': 'audio',
        'event_label': episode.audioUrl
      })
      return {...state, playlist: [episode, ...newPlaylist]}
    }
  }
})

export const logPlaylist = mirror.hook((action, getState) => {
  if (action.type !== 'player/addToPlaylist') return
  console.log('Playlist: ', getState().player.playlist)
})
