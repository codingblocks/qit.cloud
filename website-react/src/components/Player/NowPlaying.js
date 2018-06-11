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
  width: 100vw;
  max-width: 800px;
  border: solid 2px rgba(0, 0, 0, 0.3);
  border-radius: 3px;

  background: linear-gradient(to right, rgb(53, 145, 137), #185a9d);
  color: rgba(255, 255, 255, 0.9);

  #playerInfo {
    padding: 10px 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  #nowPlaying {
    position: absolute;
    background: linear-gradient(to right, #4F8F88, #46828C);
    top: -22px;
    left: 2px;
    border: solid 2px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 3px;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  h2, p {
    text-align: center;
    margin: 0;
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
