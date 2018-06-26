import React, { Component } from 'react'
import { connect, actions } from 'mirrorx'
import PropTypes from 'prop-types'

import Container from './components/Container'

import Header from './components/Header/'
import BuildInfo from './components/Header/BuildInfo'
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
  componentWillMount () {
    window.localStorage.getItem('playlist') &&
      actions.player.hydratePlaylist()
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
      playlist,
      playbackrate,
      history,
      location
    } = this.props

    return <Container>

      <Header>
        <Title>
          {
            (currentSearch !== '' || location.pathname.startsWith('/playlist')) &&
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
          <Logo>
            qit
            <BuildInfo>
              {/* INJECT_BUILDINFO_START */}
              Dev-{new Date().toJSON().slice(0, 10)}
              {/* INJECT_BUILDINFO_END */}
            </BuildInfo>
          </Logo>
        </Title>
      </Header>

      <Main>
        <Card>
          <EpisodeList>
            <Queue
              nowPlaying={nowPlaying}
              playlist={playlist}
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
  playlist: []
}

App.propTypes = {
  results: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  currentSearch: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  nowPlaying: PropTypes.object.isRequired,
  playlist: PropTypes.array.isRequired
}

export const ConnectedApp = connect(state => ({
  searchTerm: state.search.searchTerm,
  currentSearch: state.search.currentSearch,
  loading: state.search.loading,
  nowPlaying: state.player.nowPlaying,
  playlist: state.player.playlist,
  playbackrate: state.player.playbackrate
}))(App)

export default ConnectedApp
