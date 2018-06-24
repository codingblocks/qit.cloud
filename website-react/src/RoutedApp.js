import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import SharedPlaylist from './components/Main/SharedPlaylist'
import SearchResults from './components/Main/SearchResults'

export default () => (
  <Router>
    <Fragment>
      <Route path='/' component={App} />
      <Route path='/playlist/' component={SharedPlaylist} />
      <Route
        path='/search/:query'
        render={props => <SearchResults {...props} key={document.URL} />}
      />
    </Fragment>
  </Router>
)
