import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const NowPlaying = ({className, nowPlaying, children}) => (
  <div className={className}>
    <div id='playerInfo'>
      <h2 id='nowPlaying'>Now playing:</h2>
      <p id='episodeTitle'>{nowPlaying.episodeTitle}</p>
      <p id='podcastTitle'>{nowPlaying.podcastTitle}</p>
    </div>
    {children}
  </div>
)

NowPlaying.defaultProps = {
  className: '',
  nowPlaying: {}
}

NowPlaying.propTypes = {
  className: PropTypes.string,
  nowPlaying: PropTypes.object
}

export default styled(NowPlaying)`
  position: fixed;
  bottom: 0;
  height: 116px;
  width: 100vw;
  max-width: 800px;
  border: solid 2px rgba(0, 0, 0, 0.3);
  border-radius: 3px;

  background: #359189;
  color: rgba(255, 255, 255, 0.9);

  #playerInfo {
    padding: 10px 50px;
    height: 80px;
    overflow: scroll;

    -ms-overflow-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  #playerInfo::-webkit-scrollbar {
    display: none;
  }

  #nowPlaying {
    position: absolute;
    background: #359189;
    top: -22px;
    left: 2px;
    border: solid 2px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 3px;
  }

  h2, p {
    text-align: center;
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    width: 100%;
  }

  #episodeTitle {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  #podcastTitle {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
  }

  @media screen and (max-width: 500px) {
    #nowPlaying {
      font-size: 1rem;
      top: -19px;
    }

    #episodeTitle {
      font-size: 1rem;
    }

    #podcastTitle {
      font-size: 0.8rem;
    }
  }
`
