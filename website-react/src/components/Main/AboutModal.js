import React from 'react'
import styled from 'styled-components'
import { connect } from 'mirrorx'

export const About = ({className, history, version}) => {
  return <div
    className={className}
    id='aboutBackdrop'
    onClick={event => {
      event.target.id === 'aboutBackdrop' &&
        history.push('/')
    }}
  >
    <div className='playlist-container'>
      <h2>About</h2>
      <p>Service Worker: #{version}</p>
      <p>Clone me on <a href='https://github.com/codingblocks/podcast-app'>GitHub</a></p>
    </div>
  </div>
}

About.defaultProps = {}
About.propTypes = {}

export const ConnectedAbout = connect(state => ({
  playlist: state.player.playlist,
  nowPlaying: state.player.nowPlaying
}))(About)

export default styled(ConnectedAbout)`
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

  p {
    text-align: center;
    color: white;
  }

  #closeButton {
    font-size: 3rem;
    color: white;
    text-decoration: none;
  }
`
