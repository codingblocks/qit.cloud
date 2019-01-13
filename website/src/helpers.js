import config from './config'

export const sslAudioUrl = audioUrl => {
  if (audioUrl && audioUrl.startsWith('http://')) {
    return audioUrl.replace('http://', 'https://')
  }
  return audioUrl
}

export const stripHtml = html => {
  const tmp = document.createElement('DIV')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

export const nextPlaybackRate = currentRate => {
  const rates = config.playbackRates
  const nextRate = rates.indexOf(currentRate) + 1
  return rates[nextRate] || rates[0]
}

export const setPlaybackRate = (playbackRate) => {
  const audio = document.querySelector('audio')
  audio.playbackRate = playbackRate
}

export const formatTrackTime = time => {
  if (!time) return '--:--'

  const hours = Math.floor(time / 3600)
  const minutes = Math.floor(time % 3600 / 60)
  const seconds = Math.floor(time % 60)
  return hours
    ? `${hours}:${padTime(minutes)}:${padTime(seconds)}`
    : `${padTime(minutes)}:${padTime(seconds)}`

  function padTime (input) {
    const padded = `00${input}`
    return padded.substr(padded.length - 2)
  }
}
