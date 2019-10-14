import React, { Component } from 'react'
import { connect, actions } from 'mirrorx'
import PropTypes from 'prop-types'

import Card from './components/Main/Card'
import EpisodeList from './components/Main/Episode/EpisodeList'
import Queue from './components/Main/Queue'

import NowPlaying from './components/Player/NowPlaying'
import AudioPlayer from './components/Player/AudioPlayer'

import { sslAudioUrl, setPlaybackRate } from './helpers'

import API from './adapters/API'

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
      currentSearch,
      nowPlaying,
      queue,
      playbackrate,
    } = this.props

    return <div>
        <Card>
          <EpisodeList>
            <Queue
              nowPlaying={nowPlaying}
              queue={queue}
              blur={currentSearch !== ''}
            />
          </EpisodeList>
        </Card>
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
      </div>
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
