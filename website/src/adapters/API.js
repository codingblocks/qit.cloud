/* global fetch */
/* global localStorage */

import config from '../config'

class API {

  static init () {
    this.baseUrl = config.baseApiUrl
    this.userUrl = this.baseUrl + '/user'
    this.signinUrl = this.baseUrl + '/signin'
    this.signupUrl = this.baseUrl + '/signup'
    this.queueEpisodeUrl = this.baseUrl + '/queue_episode'
    this.unqueueEpisodeUrl = this.baseUrl + '/unqueue_episode'
  }

  static get headers () {
    return {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  }

  static signin (username, password) {
    return this.post(this.signinUrl, {username, password})
  }

  static signup (username, password, email) {
    return this.post(this.signupUrl, { username, password, email })
  }

  static getUser () {
    return this.get(this.userUrl)
  }

  static queueEpisode (episode) {
    return this.post(this.queueEpisodeUrl, { episode })
  }

  static unqueueEpisode (id) {
    return this.post(this.unqueueEpisodeUrl, { id })
  }

  static get (url) {
    const options = { headers: this.headers }
    return this.request(url, options)
  }

  static post (url, data) {
    const options = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    }
    return this.request(url, options)
  }

  static request (url, options) {
    return fetch(url, options)
      .then(resp => resp.json())
      .catch(event => {
        console.log(`API error: ${event}`)
        window.errorReporting.notify({
          error: `API error: ${event}`
        })
      })
  }

}

API.init()

// I use this for testing API calls in the console
// window.API = API

export default API
