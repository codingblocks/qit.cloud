import React from 'react'
import {connect, actions} from 'mirrorx'
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
import SearchResults from './components/Main/SearchResults'
import Queue from './components/Main/Queue'

import NowPlaying from './components/Player/NowPlaying'
import AudioPlayer from './components/Player/AudioPlayer'

import Loader from './components/Loader'

import {proxyUrl, setPlaybackRate} from './helpers'

export const App = connect(state => ({
  results: state.search.results,
  searchTerm: state.search.searchTerm,
  currentSearch: state.search.currentSearch,
  loading: state.search.loading,
  nowPlaying: state.player.nowPlaying,
  playlist: state.player.playlist,
  playbackRate: state.player.playbackRate
}))(
  ({
    results,
    searchTerm,
    currentSearch,
    loading,
    nowPlaying,
    playlist,
    playbackRate
  }) => (
    <Container>

      <Header>
        <Title>
          {
            currentSearch !== '' &&
            <BackButton onClick={actions.search.clearSearch}>
              &lt;
            </BackButton>
          }
          <Subtitle>
            <Search searchTerm={searchTerm} />
          </Subtitle>
          <Logo>qit</Logo>
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
            {
              currentSearch !== '' &&
                <SearchResults
                  nowPlaying={nowPlaying}
                  results={results}
                  playlist={playlist}
                  currentSearch={currentSearch}
                />
            }
          </EpisodeList>
        </Card>
      </Main>

      {
        nowPlaying.audioUrl &&
          <NowPlaying nowPlaying={nowPlaying}>
            <AudioPlayer
              src={proxyUrl(nowPlaying.audioUrl)}
              playbackRate={playbackRate}
              onEnded={actions.player.playNextEpisode}
              onLoadStart={() => setPlaybackRate(playbackRate)}
            />
          </NowPlaying>
      }

      { loading && <Loader /> }

    </Container>
  ))

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

export default App
