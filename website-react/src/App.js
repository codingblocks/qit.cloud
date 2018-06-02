import React from 'react'
import {connect, actions} from 'mirrorx'

import Container from './components/Container'
import Header from './components/Header/'
import Title from './components/Header/Title'
import Logo from './components/Header/Logo'
import Subtitle from './components/Header/Subtitle'
import Main from './components/Main/'
import Search from './components/Main/Search'
import EpisodeList from './components/Main/Episode/EpisodeList'
import Episode from './components/Main/Episode/'
import EpisodeTitle from './components/Main/Episode/EpisodeTitle'
import PodcastTitle from './components/Main/Episode/PodcastTitle'
import Card from './components/Main/Card'
import AudioPlayer from './components/AudioPlayer'
import Loader from './components/Loader'

export default connect(state => ({
  results: state.search.results,
  searchTerm: state.search.searchTerm,
  currentSearch: state.search.currentSearch,
  loading: state.search.loading,
  nowPlaying: state.player.nowPlaying
}))(
  ({
    results,
    searchTerm,
    currentSearch,
    loading,
    nowPlaying
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
            {
              currentSearch !== '' && results.length === 0
                ? `No results were found. Please try again.`
                : results.map(episode =>
                  <Episode
                    onClick={() => actions.player.play(episode)}
                    key={episode.id}
                    playing={episode.audioUrl === nowPlaying.audioUrl}
                  >
                    <EpisodeTitle>{episode.episodeTitle}</EpisodeTitle>
                    <PodcastTitle>{episode.podcastTitle}</PodcastTitle>
                  </Episode>
                )
            }
          </EpisodeList>
        </Card>
      </Main>

      <AudioPlayer controls autoPlay src={nowPlaying.audioUrl} />

      { loading && <Loader /> }

    </Container>
  ))
