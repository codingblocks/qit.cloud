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

  static get (url) {
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      }
    }).then(resp => resp.json())
      .catch(e => {
        console.log(`API error: ${e}`)
        window.errorReporting.notify({
          error: `API error: ${e}`
        })
      })
  }

  static post (url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
      .catch(e => {
        console.log(`API error: ${e}`)
        window.errorReporting.notify({
          error: `API error: ${e}`
        })
      })
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
}

API.init()

// I use this for testing API calls in the console
// window.API = API

export default API
