import React from 'react'
import {actions} from 'mirrorx'

import Episode from './Episode/'
import EpisodeTitle from './Episode/EpisodeTitle'
import PodcastTitle from './Episode/PodcastTitle'
import AddToPlaylistButton from './Episode/AddToPlaylistButton'

export default ({results, playlist, nowPlaying, currentSearch}) => (
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
      <AddToPlaylistButton
        added={playlist.some(item => item.audioUrl === episode.audioUrl)}
        onClick={event => {
          event.stopPropagation()
          actions.player.addToPlaylist(episode)
        }}
      />
    </Episode>
  )
)
