import React from 'react'
import { actions } from 'mirrorx'

import Episode from './Episode/'
import EpisodeTitle from './Episode/EpisodeTitle'
import PodcastTitle from './Episode/PodcastTitle'
import PodcastReleaseDate from './Episode/PodcastReleaseDate'
import RemoveFromPlaylistButton from './Episode/RemoveFromPlaylistButton'
import PlayNextButton from './Episode/playNextButton'
import styled from 'styled-components'
import SortableList from './SortableList'
import DragNDropIndicator from './Episode/DragNDropIndicator'

const QueueEpisode = styled(Episode)`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.3rem;
`

const QueueEpisodeTitle = styled(EpisodeTitle)`
  padding: 1.5rem 0.5rem 0 1rem;
`

const QueuePodcastTitle = styled(PodcastTitle)`
  padding: 0.3rem 0 0 1rem;
  display: flex;
  flex-wrap: wrap;
`

const QueueEpisodeBody = styled.div`
  display: flex;
  justify-content: space-between;
`

const QueueControls = styled.div`
  display: flex;
`

export const Queue = ({ playlist, nowPlaying, className }) => (
  <div className={className}>
    {playlist.length === 0 ? null : 'Next in queue:'}
    {
      playlist.length === 0
        ? `No episodes added to your queue yet.
        Go ahead and search for some episodes to add!`
        : <SortableList
          useWindowAsScrollContainer
          useDragHandle
          onSortEnd={
            ({ oldIndex, newIndex }) => actions.player.resortPlaylist({ oldIndex, newIndex })
          }
          items={
            playlist.map(episode =>
              <QueueEpisode
                onClick={() => actions.player.play(episode)}
                key={episode.id}
                playing={episode.audioUrl === nowPlaying.audioUrl}
              >
                <QueueEpisodeTitle>{episode.episodeTitle}</QueueEpisodeTitle>
                
                <QueueEpisodeBody>
                  <QueuePodcastTitle>
                    {episode.podcastTitle}&nbsp;
                    <PodcastReleaseDate releaseDate={episode.published} />
                  </QueuePodcastTitle>
  
                  <QueueControls>
                    {
                      playlist[0].audioUrl !== episode.audioUrl &&
                      <PlayNextButton
                        onClick={event => {
                          event.stopPropagation()
                          actions.player.playNext(episode)
                        }}
                      />
                    }
    
                    <RemoveFromPlaylistButton
                      lonely={playlist.length === 1}
                      onClick={event => {
                        event.stopPropagation()
                        actions.player.removeFromPlaylist(episode)
                      }}
                    />
                    {
                      playlist.length > 1 &&
                      <DragNDropIndicator />
                    }
                  </QueueControls>
                </QueueEpisodeBody>
              </QueueEpisode>
            )
          }
        />
    }
  </div>
)

export default styled(Queue)`
    ${props => props.blur && 'filter: blur(5px);'}
`
