import React, { Component } from 'react'
import { actions, connect } from 'mirrorx'
import styled from 'styled-components'

import PodcastReleaseDate from './Episode/PodcastReleaseDate'
import AddToQueueButton from './Episode/AddToQueueButton'
import Loader from '../Loader'

import {
  StyledEpisode,
  StyledEpisodeTitle,
  StyledPodcastTitle,
  StyledEpisodeBody
} from './Episode/Styled'

export class SearchResults extends Component {
  componentWillMount () {
    const query = this.props.match.params.query
    actions.search.updateSearchTerm(query)
    actions.search.search(query)
  }

  render () {
    const {
      className,
      results,
      resultCount,
      queue,
      nowPlaying,
      currentSearch,
      maxResults,
      history,
      loading
    } = this.props

    if (loading) return <Loader />

    return (
      <div
        className={className}
        onClick={event => {
          if (event.target.nodeName !== 'DIV') return
          actions.search.clearSearch()
          history.push('/')
        }}
      >
        <div id='searchContainer'>
          <div id='resultText'>
            {resultCount >= maxResults
              ? `${resultCount} results found for ${currentSearch}.
                  Showing the first ${maxResults} results.`
              : `${resultCount} results for ${currentSearch}`
            }
          </div>
          {results.length === 0
            ? <p id='noResults'>No results were found. Please try again.</p>
            : <ul>
              {results.map(episode =>
                <StyledEpisode
                  onClick={() => actions.player.play(episode)}
                  key={episode.id}
                  playing={episode.audioUrl === nowPlaying.audioUrl}
                  data-item-type='search'
                >
                  <StyledEpisodeTitle>{episode.episodeTitle}</StyledEpisodeTitle>

                  <StyledEpisodeBody>
                    <StyledPodcastTitle>
                      {episode.podcastTitle}&nbsp;<PodcastReleaseDate releaseDate={episode.published} />
                    </StyledPodcastTitle>
                    <AddToQueueButton
                      added={queue.some(
                        item => item.audioUrl === episode.audioUrl
                      )}
                      onClick={event => {
                        event.stopPropagation()
                        actions.player.addToQueue(episode)
                      }}
                    />
                  </StyledEpisodeBody>
                </StyledEpisode>)
              }
            </ul>
          }
        </div>
      </div>
    )
  }
}

SearchResults.defaultProps = {
  results: [],
  queue: [],
  nowPlaying: {},
  currentSearch: '',
  maxResults: null
}

export const ConnectedSearchResults = connect(state => ({
  nowPlaying: state.player.nowPlaying,
  results: state.search.results,
  resultCount: state.search.resultCount,
  queue: state.player.queue,
  currentSearch: state.search.currentSearch,
  maxResults: state.search.maxResults,
  loading: state.search.loading
}))(SearchResults)

export default styled(ConnectedSearchResults)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: scroll;
  padding: 80px 10% 130px 10%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  background: rgba(255, 255, 255, 0.8);
  list-style: none;

  #searchContainer {
    max-width: 700px;
    width: 100vw;
  }

  #resultText {
    text-align: center;
    width: 100%;
    font-weight: bold;
  }

  #noResults {
    margin-top: 100px;
    text-align: center;
    font-size: 1.2rem;
  }

  #closeButton {
    position: absolute;
    top: 8vh;
    right: 2vw;

    font-size: 2rem;
    background: none;
    border: none;
  }
`
