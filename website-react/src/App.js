import React, { Component } from 'react'
import { connect, actions } from 'mirrorx'
import PropTypes from 'prop-types'

import Container from './components/Container'

import Header from './components/Header/'
import Title from './components/Header/Title'
import Search from './components/Header/Search'
import Logo from './components/Header/Logo'
import BackButton from './components/Header/BackButton'
import Subtitle from './components/Header/Subtitle'

import Main from './components/Main/'
import Card from './components/Main/Card'
import EpisodeList from './components/Main/Episode/EpisodeList'
import Queue from './components/Main/Queue'

import NowPlaying from './components/Player/NowPlaying'
import AudioPlayer from './components/Player/AudioPlayer'

import { sslAudioUrl, setPlaybackRate } from './helpers'

export class App extends Component {
  componentDidMount () {
    const nowPlaying = window.localStorage.getItem('nowPlaying')
    nowPlaying && actions.player.play(JSON.parse(nowPlaying))

    window.localStorage.getItem('token') &&
      actions.player.getRemoteEpisodes()
  }

  componentDidUpdate () {
    this.props.location.pathname === '/' &&
      actions.search.clearSearch()
  }

  render () {
    const {
      searchTerm,
      currentSearch,
      nowPlaying,
      queue,
      playbackrate,
      history,
      location
    } = this.props

    return <Container>

      <Header>
        <Title>
          {
            (currentSearch !== '' || location.pathname.startsWith('/queue')) &&
            <BackButton onClick={() => {
              history.push('/')
              actions.search.clearSearch()
            }}>
              &lt;
            </BackButton>
          }
          <Subtitle>
            <Search searchTerm={searchTerm} />
          </Subtitle>
          <Logo text='qit' href='/about/' history={history} />
        </Title>
      </Header>

      <Main>
        <Card>
          <EpisodeList>
            <Queue
              nowPlaying={nowPlaying}
              queue={queue}
              blur={currentSearch !== ''}
            />
          </EpisodeList>
        </Card>
      </Main>

      {
        nowPlaying.audioUrl &&
        <NowPlaying nowPlaying={nowPlaying}>
          <AudioPlayer
            src={sslAudioUrl(nowPlaying.audioUrl)}
            playbackrate={playbackrate}
            onEnded={actions.player.playNextEpisode}
            onLoadStart={() => setPlaybackRate(playbackrate)}
          />
        </NowPlaying>
      }

    </Container>
  }
}

App.defaultProps = {
  results: [],
  searchTerm: '',
  currentSearch: '',
  loading: false,
  nowPlaying: {},
  queue: []
}

App.propTypes = {
  results: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  currentSearch: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  nowPlaying: PropTypes.object.isRequired,
  queue: PropTypes.array.isRequired
}

export const ConnectedApp = connect(state => ({
  searchTerm: state.search.searchTerm,
  currentSearch: state.search.currentSearch,
  loading: state.search.loading,
  nowPlaying: state.player.nowPlaying,
  queue: state.player.queue,
  playbackrate: state.player.playbackrate
}))(App)

export default ConnectedApp
