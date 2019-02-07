import * as helpers from '../helpers.js'

describe('Helpers - sslAudioUrl', () => {
  const http = 'http://'
  const https = 'https://'

  it('should convert to https', () => {
    const urlEnding = 'any/url.com'
    const httpURL = `${http}${urlEnding}`
    const httpsURL = `${https}${urlEnding}`
    expect(helpers.sslAudioUrl(httpURL)).toBe(httpsURL)
  })

  it('empty string should return empty string', () => {
    expect(helpers.sslAudioUrl('')).toBe('')
  })

  it('null should return null', () => {
    expect(helpers.sslAudioUrl(null)).toBe(null)
  })

  it('not starting with http should return the input', () => {
    const random = `x${http}`
    expect(helpers.sslAudioUrl(random)).toBe(random)
  })
})
