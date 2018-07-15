import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './components/About'
import App from './App'
import SharedPlaylist from './components/Main/SharedPlaylist'
import SearchResults from './components/Main/SearchResults'

export default () => (
  <Router>
    <div>
      <Route path='/' component={App} />
      <Route
        path='/about/'
        render={props => <About {...props} />}
      />
      <Route path='/playlist/' component={SharedPlaylist} />
      <Route
        path='/search'
        render={props => <SearchResults {...props} key={document.URL} />}
      />
    </div>
  </Router>
)
