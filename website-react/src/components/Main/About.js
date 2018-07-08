import React from 'react'
import styled from 'styled-components'
import { connect } from 'mirrorx'

class About extends React.Component {
  state = { version: 'loading...' }

  componentDidMount () {
    window.caches.keys().then(keyList => {
      const cacheKey = keyList.find((k) => k.match('^podcasts-'))
      if (cacheKey) {
        var cacheKeyParts = cacheKey.split('-')
        if (cacheKeyParts.length === 2) {}
        this.setState({
          version: cacheKeyParts[1]
        })
        return
      }

      this.setState({
        version: 'Unknown'
      })
    })
  }

  render () {
    const { className, history } = this.props
    return <div className={className} id='aboutBackdrop'>
      <div className='playlist-container'>
        <h2>Thanks for checking out qit!</h2>
        <p>This is an open source project, check it out on <a href='https://github.com/codingblocks/podcast-app' target='_blank' rel='noopener noreferrer'>GitHub</a>.</p>
        <p>Service Worker: {this.state.version}</p>

        <p><a href='javascript:void(0)'
          onClick={event => {
            event.preventDefault()
            history.push('/')
          }}
        >close</a></p>
      </div>
    </div>
  }
}

export const ConnectedAbout = connect(state => ({
  version: 'Loading...'
}))(About)

export default styled(ConnectedAbout)`
  position: fixed;
  top: 0;
  left: 0;
  width: 800px;
  left: 50%;
  margin-left: -400px;
  height: 100vh;
  list-style: none;
  padding: 60px;
  background: white;

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  a {
    color: #339999;
  }

  img {
    display: block;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 300px;
    width: 300px;
    transform: rotate(20deg);
    -webkit-animation:spin 60s linear infinite;
    -moz-animation:spin 60s linear infinite;
    animation:spin 60s linear infinite;
  }

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`
