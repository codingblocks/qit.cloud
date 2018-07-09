import React from 'react'
import { actions } from 'mirrorx'

import PodcastReleaseDate from './Episode/PodcastReleaseDate'
import RemoveFromQueueButton from './Episode/RemoveFromQueueButton'
import PlayNextButton from './Episode/playNextButton'
import styled from 'styled-components'
import SortableList from './SortableList'
import DragNDropIndicator from './Episode/DragNDropIndicator'

import {
  StyledEpisode,
  StyledEpisodeTitle,
  StyledPodcastTitle,
  StyledEpisodeBody,
  StyledControls
} from './Episode/Styled'

export const Queue = ({ queue, nowPlaying, className }) => (
  <div className={className}>
    {queue.length === 0 ? null : 'Next in queue:'}
    {queue.length === 0 ? (
      `Your queue is empty. Try a search like "pwa" to learn more about the technology behind this app!`
    ) : (
      <SortableList
        useWindowAsScrollContainer
        useDragHandle
        onSortEnd={({ oldIndex, newIndex }) =>
          actions.player.resortQueue({ oldIndex, newIndex })
        }
        items={queue.map(episode => (
          <StyledEpisode
            onClick={() => actions.player.play(episode)}
            key={episode.id}
            playing={episode.audioUrl === nowPlaying.audioUrl}
            data-item-type='queue'
          >
            <StyledEpisodeTitle>{episode.episodeTitle}</StyledEpisodeTitle>

            <StyledEpisodeBody>
              <StyledPodcastTitle>
                {episode.podcastTitle}&nbsp;
                <PodcastReleaseDate releaseDate={episode.published} />
              </StyledPodcastTitle>

              <StyledControls>
                {queue[0].audioUrl !== episode.audioUrl && (
                  <PlayNextButton
                    onClick={event => {
                      event.stopPropagation()
                      actions.player.playNext(episode)
                    }}
                  />
                )}

                <RemoveFromQueueButton
                  lonely={queue.length === 1}
                  onClick={event => {
                    event.stopPropagation()
                    actions.player.removeFromQueue(episode)
                  }}
                />
                {queue.length > 1 && <DragNDropIndicator />}
              </StyledControls>
            </StyledEpisodeBody>
          </StyledEpisode>
        ))}
      />
    )}
  </div>
)

export default styled(Queue)`
  ${props => props.blur && 'filter: blur(5px);'};
`
