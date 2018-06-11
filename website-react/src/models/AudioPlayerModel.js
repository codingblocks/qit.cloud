import mirror from 'mirrorx'

import { nextPlaybackRate, setPlaybackRate } from '../helpers'

export default mirror.model({
  name: 'player',
  initialState: {
    nowPlaying: {},
    playlist: [],
    playbackRate: 1
  },
  reducers: {

    play (state, episode) {
      return { ...state, nowPlaying: episode }
    },

    addToPlaylist (state, episode) {
      return { ...state, playlist: [...state.playlist, episode] }
    },

    removeFromPlaylist (state, episodeId) {
      const playlist = state.playlist
        .filter(episode => episode.id !== episodeId)
      return { ...state, playlist }
    },

    resortPlaylist (state, data) {
      const movedEpisode = state.playlist
        .find(episode => episode.id === data.episodeId)
      const playlist = state.playlist
        .filter(episode => episode.id !== data.episodeId)
      if (data.movedIndex === null) {
        playlist.push(movedEpisode)
        return { ...state, playlist }
      } else {
        playlist.splice(data.movedIndex, 0, movedEpisode)
        return { ...state, playlist }
      }
    },

    playNextEpisode (state) {
      const currentlyPlaying = state.nowPlaying
      const playlist = state.playlist
        .slice()
        .filter(episode => episode.audioUrl !== currentlyPlaying.audioUrl)
      const nowPlaying = playlist.shift() || {}
      return { ...state, nowPlaying, playlist }
    },

    playNext (state, episode) {
      const newPlaylist = state.playlist
        .filter(item => item.audioUrl !== episode.audioUrl)
      return { ...state, playlist: [episode, ...newPlaylist] }
    },

    nextPlaybackRate (state) {
      const playbackRate = nextPlaybackRate(state.playbackRate)
      setPlaybackRate(playbackRate)
      return { ...state, playbackRate }
    }

  }
})
