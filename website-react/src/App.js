import React from 'react'
import {connect, actions} from 'mirrorx'

import Container from './components/Container'
import Header from './components/Header/'
import Title from './components/Header/Title'
import Logo from './components/Header/Logo'
import Subtitle from './components/Header/Subtitle'
import Main from './components/Main/'
import Search from './components/Main/Search'
import Card from './components/Main/Card'
import EpisodeList from './components/Main/Episode/EpisodeList'
import SearchResults from './components/Main/SearchResults'
import Playlist from './components/Main/Playlist'
import AudioPlayer from './components/AudioPlayer'
import Loader from './components/Loader'

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
          <Subtitle>
            {
              currentSearch.length === 0
                ? 'Search for a topic below'
                : `${currentSearch}: ${results.length} episodes found`
            }
          </Subtitle>
          <Logo>qit</Logo>
        </Title>
      </Header>

      <Main>
        <Card>
          <Search searchTerm={searchTerm} />
          <EpisodeList>
            <Playlist
              nowPlaying={nowPlaying}
              playlist={playlist}
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

      <AudioPlayer
        controls
        autoPlay
        src={nowPlaying.audioUrl}
        onEnded={actions.player.playNextEpisode}
      />

      { loading && <Loader /> }

    </Container>
  ))
