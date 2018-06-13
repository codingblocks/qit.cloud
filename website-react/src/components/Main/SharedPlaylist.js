import React from 'react'
import styled from 'styled-components'
import { actions } from 'mirrorx'
import { Link } from 'react-router-dom'

import Episode from './Episode/'
import EpisodeTitle from './Episode/EpisodeTitle'
import PodcastTitle from './Episode/PodcastTitle'
import AddToPlaylistButton from './Episode/AddToPlaylistButton'

export const SharedPlaylist = ({className}) => {
  const url = new URL(document.URL)
  const data = url.pathname.replace('/playlist/', '')
  console.log(decodeURI(data).episodes)
  const { metadata, episodes } = JSON.parse(decodeURI(data))

  return <div className={className}>
    <Link to='/' id='closeButton'>X</Link>
    <div className='playlist-container'>
      <h2>{`${metadata.author} has shared the playlist "${metadata.title}" with you!`}</h2>
      {
        episodes.map(episode => (
          <Episode
            onClick={() => actions.player.play(episode)}
            key={episode.id}
            playing={episode.audioUrl === 'nowPlaying.audioUrl'}
          >
            <EpisodeTitle>{episode.episodeTitle}</EpisodeTitle>
            <PodcastTitle>{episode.podcastTitle}</PodcastTitle>
            <AddToPlaylistButton
              // added={playlist.some(item => item.audioUrl === episode.audioUrl)}
              added={false}
              onClick={event => {
                event.stopPropagation()
                actions.player.addToPlaylist(episode)
              }}
            />
          </Episode>
        ))
      }
    </div>
  </div>
}

export default styled(SharedPlaylist)`
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
    max-width: 800px;
    margin: 0 auto;
  }

  #closeButton {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 3rem;
    color: white;
    text-decoration: none;
  }
`
