import mirror, { actions } from 'mirrorx'
import { arrayMove } from 'react-sortable-hoc'

import API from '../adapters/API'
import { nextPlaybackRate, setPlaybackRate } from '../helpers'

export default mirror.model({
  name: 'player',
  initialState: {
    nowPlaying: {},
    queue: [],
    playbackrate: 1
  },
  reducers: {
    play (state, episode) {
      window.localStorage.setItem('nowPlaying', JSON.stringify(episode))
      return { ...state, nowPlaying: episode }
    },

    addToQueue (state, episode) {
      return { ...state, queue: [...state.queue, episode] }
    },

    removeFromQueue (state, episodeToRemove) {
      const queue = state.queue.filter(
        episode => episode.id !== episodeToRemove.id
      )
      return { ...state, queue }
    },

    resortQueue (state, data) {
      const queue = arrayMove(state.queue, data.oldIndex, data.newIndex)
      return { ...state, queue }
    },

    hydrateQueue (state, episodes = []) {
      return { ...state, queue: episodes }
    },

    playNextEpisode (state) {
      const currentlyPlaying = state.nowPlaying
      const queue = state.queue
        .slice()
        .filter(episode => episode.audioUrl !== currentlyPlaying.audioUrl)
      const nowPlaying = queue.shift() || {}
      window.localStorage.setItem('nowPlaying', JSON.stringify(nowPlaying))
      return { ...state, nowPlaying, queue }
    },

    playNext (state, episode) {
      const newQueue = state.queue.filter(
        item => item.audioUrl !== episode.audioUrl
      )
      return { ...state, queue: [episode, ...newQueue] }
    },

    nextPlaybackRate (state) {
      const playbackrate = nextPlaybackRate(state.playbackrate)
      setPlaybackRate(playbackrate)
      return { ...state, playbackrate }
    },

    updateWidth (state, width) {
      return { ...state, containerWidth: width }
    }
  },
  effects: {
    async getRemoteEpisodes () {
      try {
        const { episodes, username } = await API.getUser()
        actions.player.hydrateQueue(episodes)
        actions.user.signin(username)
      } catch (e) {
        console.log(`API Error: ${e}`)
      }
    }
  }
})
