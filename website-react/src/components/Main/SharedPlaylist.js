import React from 'react'
import styled from 'styled-components'
import { actions, connect } from 'mirrorx'

import Episode from './Episode'
import EpisodeTitle from './Episode/EpisodeTitle'
import PodcastTitle from './Episode/PodcastTitle'
import AddToQueueButton from './Episode/AddToQueueButton'

export const SharedPlaylist = ({className, history, queue, nowPlaying}) => {
  const url = new URL(document.URL)
  const data = url.pathname.replace('/playlist/', '')
  console.log(decodeURI(data).episodes)
  const { metadata, episodes } = JSON.parse(decodeURI(data))

  return <div
    className={className}
    id='sharedPlaylistBackdrop'
    onClick={event => {
      event.target.id === 'sharedPlaylistBackdrop' &&
        history.push('/')
    }}
  >
    <div className='playlist-container'>
      <h2>
        {`${metadata.author} has shared the playlist "${metadata.title}" with you!`}
      </h2>
      {
        episodes.map(episode => (
          <Episode
            onClick={() => actions.player.play(episode)}
            key={episode.id}
            playing={episode.audioUrl === nowPlaying.audioUrl}
          >
            <EpisodeTitle>{episode.episodeTitle}</EpisodeTitle>
            <PodcastTitle>{episode.podcastTitle}</PodcastTitle>
            <AddToQueueButton
              added={queue.some(item => item.audioUrl === episode.audioUrl)}
              onClick={event => {
                event.stopPropagation()
                actions.player.addToQueue(episode)
              }}
            />
          </Episode>
        ))
      }
    </div>
  </div>
}

SharedPlaylist.defaultProps = {
  queue: []
}

export const ConnectedSharedPlaylist = connect(state => ({
  queue: state.player.queue,
  nowPlaying: state.player.nowPlaying
}))(SharedPlaylist)

export default styled(ConnectedSharedPlaylist)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  list-style: none;
  padding-top: 60px;
  background: rgba(0,0,0,0.8);

  h2 {
    text-align: center;
    color: white;
  }

  .playlist-container {
    max-width: 700px;
    margin: 0 auto;
  }

  #closeButton {
    font-size: 3rem;
    color: white;
    text-decoration: none;
  }
`
