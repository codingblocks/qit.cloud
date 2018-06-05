import React from 'react'
import {actions} from 'mirrorx'

import Episode from './Episode/'
import EpisodeTitle from './Episode/EpisodeTitle'
import PodcastTitle from './Episode/PodcastTitle'
import RemoveFromPlaylistButton from './Episode/RemoveFromPlaylistButton'

export default ({results, playlist, nowPlaying}) => (
  playlist.length === 0
    ? `No episodes added to your playlist yet.
    Go ahead and search for some episodes to add!`
    : playlist.map(episode =>
      <Episode
        onClick={() => actions.player.play(episode)}
        key={episode.id}
        playing={episode.audioUrl === nowPlaying.audioUrl}
      >
        <EpisodeTitle>{episode.episodeTitle}</EpisodeTitle>
        <PodcastTitle>{episode.podcastTitle}</PodcastTitle>
        <RemoveFromPlaylistButton
          onClick={event => {
            event.stopPropagation()
            actions.player.removeFromPlaylist(episode.id)
          }}
        />
      </Episode>
    )
)
