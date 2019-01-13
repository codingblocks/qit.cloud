/* global fetch */
/* global localStorage */

import config from '../config'

class API {
  static signin (username, password) {
    return fetch(API.signinUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(resp => resp.json())
      .catch(e => {
        console.log(`API error: ${e}`)
        window.errorReporting.notify({
          error: `API error: ${e}`
        })
      })
  }

  static signup (username, password, email) {
    return fetch(API.signupUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
        email
      })
    })
      .then(resp => resp.json())
      .catch(e => {
        console.log(`API error: ${e}`)
        window.errorReporting.notify({
          error: `API error: ${e}`
        })
      })
  }

  static getUser (token = localStorage.getItem('token')) {
    return fetch(API.userUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
      .then(resp => resp.json())
      .catch(e => {
        console.log(`API error: ${e}`)
        window.errorReporting.notify({
          error: `API error: ${e}`
        })
      })
  }

  static queueEpisode (episode, token = localStorage.getItem('token')) {
    return fetch(API.queueEpisodeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ episode })
    })
      .then(resp => resp.json())
      .catch(e => {
        console.log(`API error: ${e}`)
        window.errorReporting.notify({
          error: `API error: ${e}`
        })
      })
  }

  static unqueueEpisode (id, token = localStorage.getItem('token')) {
    return fetch(API.unqueueEpisodeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ id })
    })
      .then(resp => resp.json())
      .catch(e => {
        console.log(`API error: ${e}`)
        window.errorReporting.notify({
          error: `API error: ${e}`
        })
      })
  }
}

API.baseUrl = config.baseApiUrl
API.userUrl = API.baseUrl + '/user'
API.signinUrl = API.baseUrl + '/signin'
API.signupUrl = API.baseUrl + '/signup'
API.queueEpisodeUrl = API.baseUrl + '/queue_episode'
API.unqueueEpisodeUrl = API.baseUrl + '/unqueue_episode'

// I use this for testing API calls in the console
// window.API = API

export default API
