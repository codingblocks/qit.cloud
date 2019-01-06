import React from 'react'
import { Router, Route } from 'mirrorx'

import About from './components/About'
import App from './App'
import SharedPlaylist from './components/Main/SharedPlaylist'
import SearchResults from './components/Main/SearchResults'

export default () =>
  <Router>
    <div>
      <Route path='/' component={App} />
      <Route
        path='/about/'
        render={props => <About {...props} />}
      />
      <Route path='/playlist/' component={SharedPlaylist} />
      <Route
        path='/search/:query'
        render={props => <SearchResults {...props} key={document.URL} />}
      />
    </div>
  </Router>
