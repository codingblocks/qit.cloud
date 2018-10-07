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
import Button from '@material-ui/core/Button'
import API from './adapters/API';

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
      currentUser,
      currentSearch,
      nowPlaying,
      queue,
      playbackrate,
      history,
      location
    } = this.props

    return <Container>

      <Header>
        {
          currentUser
            ? <Button
              onClick={() => {
                actions.user.signout()
                actions.player.hydrateQueue([])
                history.push('/signin')
              }}
              style={{
                color: 'white',
                border: 'solid 1px white',
                position: 'absolute',
                top: '10px',
                left: '10px'
              }}
              variant='outlined'
            >
              SIGN OUT
            </Button>
            : <Button
              onClick={() => history.push('/signin')}
              style={{
                color: 'white',
                border: 'solid 1px white',
                position: 'absolute',
                top: '10px',
                left: '10px'
              }}
              variant='outlined'
            >
              SIGN IN
            </Button>
        }
        <Title>
          <Subtitle>
            <Search />
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
            onEnded={() => {
              API.unqueueEpisode(nowPlaying.id)
              actions.player.playNextEpisode()
            }}
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

const ConnectedApp = connect(state => ({
  searchTerm: state.search.searchTerm,
  currentSearch: state.search.currentSearch,
  loading: state.search.loading,
  nowPlaying: state.player.nowPlaying,
  queue: state.player.queue,
  playbackrate: state.player.playbackrate,
  currentUser: state.user.currentUser
}))(App)

export default ConnectedApp
