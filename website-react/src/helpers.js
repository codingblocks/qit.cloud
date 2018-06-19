import config from './config'

export const proxyUrl = audioUrl => {
  if (audioUrl && audioUrl.startsWith('http://') && config.sslProxyUrl) {
    return config.sslProxyUrl + audioUrl
  }
  return audioUrl
}

export const stripHtml = html => {
  const tmp = document.createElement('DIV')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

export const nextPlaybackRate = currentRate => {
  const rates = config.playbackrates
  const nextRate = rates.indexOf(currentRate) + 1
  return rates[nextRate] || rates[0]
}

export const setPlaybackRate = (playbackrate) => {
  const audio = document.querySelector('audio')
  audio.playbackrate = playbackrate
}
