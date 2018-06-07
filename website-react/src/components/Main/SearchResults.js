import React from 'react'
import {actions} from 'mirrorx'
import styled from 'styled-components'

import Episode from './Episode/'
import EpisodeTitle from './Episode/EpisodeTitle'
import PodcastTitle from './Episode/PodcastTitle'
import AddToPlaylistButton from './Episode/AddToPlaylistButton'

export const SearchResults = ({
  className,
  results,
  playlist,
  nowPlaying,
  currentSearch
}) => (
  <div
    className={className}
    onClick={event => {
      if (event.target.nodeName !== 'DIV') return
      actions.search.clearSearch()
    }}
  >
    <b>{`${results.length} results for "${currentSearch}"`}</b>
    {
      results.length === 0
        ? <p id='noResults'>No results were found. Please try again.</p>
        : results.map(episode =>
          <Episode
            onClick={() => actions.player.play(episode)}
            key={episode.id}
            playing={episode.audioUrl === nowPlaying.audioUrl}
          >
            <EpisodeTitle>{episode.episodeTitle}</EpisodeTitle>
            <PodcastTitle>{episode.podcastTitle}</PodcastTitle>
            <AddToPlaylistButton
              added={playlist.some(item => item.audioUrl === episode.audioUrl)}
              onClick={event => {
                event.stopPropagation()
                actions.player.addToPlaylist(episode)
              }}
            />
          </Episode>
        )
    }
  </div>
)

export default styled(SearchResults)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: scroll;
  padding: 80px 10% 130px 10%;

  background: rgba(255, 255, 255, 0.8);
  list-style: none;

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
