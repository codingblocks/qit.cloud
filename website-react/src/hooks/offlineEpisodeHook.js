import mirror from 'mirrorx'

import config from '../config'

const addToCache = url => {
  window.fetch(config.corsProxy + url)
    .then(response => {
      console.log('******')
      console.log(response)
      console.log('******')
      window.caches
        .open('qit-episodes')
        .then(cache => cache.put(url, response))
    })
}

const removeFromCache = url => {
  console.log()
  const request = new window.Request(url)
  window.caches
    .open('qit-episodes')
    .then(cache => cache.delete(request))
}

export const eventTracking = mirror.hook((action, getState) => {
  if (action.type === 'player/addToQueue') {
    const url = action.data.audioUrl
    console.log('caching episode: ', url)
    addToCache(url)
  }

  if (action.type === 'player/removeFromQueue') {
    const { audioUrl } = action.data
    console.log('deleting episode: ', audioUrl)
    removeFromCache(audioUrl)
  }
})
