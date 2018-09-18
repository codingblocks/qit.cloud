import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const NowPlaying = ({ className, nowPlaying, children }) =>
  <div className={className}>
    <div id='playerInfo'>
      <p id='episodeTitle'>{nowPlaying.episodeTitle}</p>
      <p id='podcastTitle'>{nowPlaying.podcastTitle}</p>
    </div>
    {children}
  </div>

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
  width: 100vw;
  max-width: 800px;
  border-radius: 3px;
  z-index: 1;

  background: linear-gradient(to right, rgb(53, 145, 137), #185a9d);
  color: white;

  #playerInfo {
    padding: 10px 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  p {
    text-align: center;
    margin: 0;
    width: 100%;

  }

  #episodeTitle {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  #podcastTitle {
    font-size: 1rem;
    color: white;
    font-weight: bold;
    letter-spacing: 0.1em;
  }

  @media screen and (max-width: 500px) {
    #episodeTitle {
      font-size: 1rem;
    }

    #podcastTitle {
      font-size: 0.8rem;
    }
  }
`
