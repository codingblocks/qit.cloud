import React from 'react'
import { Router, Route } from 'mirrorx'

import About from './components/About'
import App from './App'
import SharedPlaylist from './components/Main/SharedPlaylist'
import SearchResults from './components/Main/SearchResults'
import UserForm from './components/Main/UserForm'
import Header from './components/Header'
import Container from './components/Container'
import Main from './components/Main'

export default () =>
  <Router>
    <Container>
      <Header />
      <Main>
        <Route path='/' component={App} />
        <Route path='/signin' component={UserForm} />
        <Route
          path='/about'
          render={props => <About {...props} />}
        />
        <Route path='/playlist' component={SharedPlaylist} />
        <Route
          path='/search/:query'
          render={props => <SearchResults {...props} key={document.URL} />}
        />
      </Main>
    </Container>
  </Router>
