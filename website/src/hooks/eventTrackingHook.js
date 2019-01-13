import mirror from 'mirrorx'

const gtag = window.gtag

const getEpisodeById = (queue, episodeId) => {
  return queue
    ? queue.find(episode => episode.id === episodeId)
    : null
}

export const eventTracking = mirror.hook((action, getState) => {
  switch (action.type) {
    case 'player/addToQueue':
      const toAddAudioUrl = action.data.audioUrl
      gtag('event', 'add_to_queue', {
        'event_category': 'audio',
        'event_label': toAddAudioUrl
      })
      break

    case 'player/play':
      const toPlayAudioUrl = action.data.audioUrl
      gtag('event', 'play', {
        'event_category': 'audio',
        'event_label': toPlayAudioUrl
      })
      break

    case 'player/removeFromQueue':
      const {queue} = getState().player
      const episodeId = action.data
      const removedEpisode = getEpisodeById(queue, episodeId)
      if (removedEpisode) {
        gtag('event', 'remove_from_queue', {
          'event_category': 'audio',
          'event_label': removedEpisode.audioUrl
        })
      }
      break

    case 'player/playNextEpisode':
      const state = getState().player
      const currentlyPlaying = state.nowPlaying
      const newQueue = state.queue
        .slice()
        .filter(episode => episode.audioUrl !== currentlyPlaying.audioUrl)
      const nowPlaying = newQueue.shift() || {}
      gtag('event', 'play_next_episode', {
        'event_category': 'audio',
        'event_label': nowPlaying.audioUrl
      })
      break

    case 'player/playNext':
      const episode = action.data
      gtag('event', 'play_next', {
        'event_category': 'audio',
        'event_label': episode.audioUrl
      })
      break

    default:
      break
  }
})
