import React from 'react'
import {connect, actions} from 'mirrorx'

import Container from './components/Container'
import Header from './components/Header/'
import Title from './components/Header/Title'
import Search from './components/Header/Search'
import Logo from './components/Header/Logo'
import Subtitle from './components/Header/Subtitle'
import Main from './components/Main/'
import Card from './components/Main/Card'
import EpisodeList from './components/Main/Episode/EpisodeList'
import SearchResults from './components/Main/SearchResults'
import Queue from './components/Main/Queue'
import NowPlaying from './components/NowPlaying.js'
import AudioPlayer from './components/AudioPlayer'
import Loader from './components/Loader'
import BackButton from './components/BackButton'

import {proxyUrl} from './helpers'

export default connect(state => ({
  results: state.search.results,
  searchTerm: state.search.searchTerm,
  currentSearch: state.search.currentSearch,
  loading: state.search.loading,
  nowPlaying: state.player.nowPlaying,
  playlist: state.player.playlist
}))(
  ({
    results,
    searchTerm,
    currentSearch,
    loading,
    nowPlaying,
    playlist
  }) => (
    <Container>

      <Header>
        <Title>
          {
            currentSearch !== '' &&
            <BackButton
              onClick={actions.search.clearSearch}>
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
          <NowPlaying
            nowPlaying={nowPlaying}
          >
            <AudioPlayer
              controls
              autoPlay
              src={proxyUrl(nowPlaying.audioUrl)}
              onEnded={actions.player.playNextEpisode}
            />
          </NowPlaying>
      }

      { loading && <Loader /> }

    </Container>
  ))
