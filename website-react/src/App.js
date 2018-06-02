import React from 'react'
import {connect} from 'mirrorx'

import Container from './components/Container'
import Header from './components/Header/'
import Title from './components/Header/Title'
import Logo from './components/Header/Logo'
import Subtitle from './components/Header/Subtitle'
import Main from './components/Main/'
import Search from './components/Main/Search'
import EpisodeList from './components/Main/EpisodeList'
import Episode from './components/Main/Episode'
import Card from './components/Main/Card'
import AudioPlayer from './components/AudioPlayer'
import Loader from './components/Loader'

export default connect(state => ({
  results: state.search.results,
  searchTerm: state.search.searchTerm,
  currentSearch: state.search.currentSearch,
  loading: state.search.loading,
  audioSource: state.player.source
}))(
  ({
    results,
    searchTerm,
    currentSearch,
    loading,
    audioSource
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
                : results.map(result =>
                  <Episode
                    key={result.id}
                    episode={result}
                    playing={result.audioUrl === audioSource}
                  />
                )
            }
          </EpisodeList>
        </Card>
      </Main>

      <AudioPlayer controls autoPlay src={audioSource} />

      { loading && <Loader /> }

    </Container>
  ))
