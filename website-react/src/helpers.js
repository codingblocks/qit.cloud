import config from './config'

export const proxyUrl = audioUrl => {
  if (audioUrl && audioUrl.startsWith('http://') && config.sslProxyUrl) {
    return config.sslProxyUrl + audioUrl
  }
  return audioUrl
}
