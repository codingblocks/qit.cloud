import config from './config'

export const proxyUrl = audioUrl => {
  if (audioUrl && audioUrl.startsWith('http://') && config.sslProxyUrl) {
    return config.sslProxyUrl + audioUrl
  }
  return audioUrl
}

export const stripHtml = html => {
   const tmp = document.createElement("DIV")
   tmp.innerHTML = html
   return tmp.textContent || tmp.innerText || ""
}
