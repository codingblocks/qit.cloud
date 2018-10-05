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
    }).then(resp => resp.json())
  }

  static signup (username, password) {
    return fetch(API.signupUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    }).then(resp => resp.json())
  }

  static getUser (token = localStorage.getItem('token')) {
    return fetch(API.userUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then(resp => resp.json())
  }

  static queueEpisode (episode, token = localStorage.getItem('token')) {
    return fetch(API.queueEpisodeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ episode })
    }).then(resp => resp.json())
  }
}

API.baseUrl = config.baseApiUrl
API.userUrl = API.baseUrl + '/user'
API.signinUrl = API.baseUrl + '/signin'
API.signupUrl = API.baseUrl + '/signup'
API.queueEpisodeUrl = API.baseUrl + '/queue_episode'

export default API
