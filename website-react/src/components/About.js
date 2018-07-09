import React from 'react'
import styled from 'styled-components'
import { connect } from 'mirrorx'

class About extends React.Component {
  state = { version: 'loading...' }

  componentDidMount () {
    window.caches.keys().then(keyList => {
      const cacheKey = keyList.find((k) => k.match('^podcasts_'))
      if (cacheKey) {
        var cacheKeyParts = cacheKey.split('_')
        if (cacheKeyParts.length === 2 && cacheKeyParts[1]) {}
        this.setState({
          version: cacheKeyParts[1].replace(/{|}/g, '')
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
    return <div className={className}>
      <div className='innerContent'>
        <h2>Thanks!</h2>

        <p>This is an open source project, check it out on <a href='https://github.com/codingblocks/podcast-app' target='_blank' rel='noopener noreferrer'>GitHub</a>.</p>
        <p className='finePrint'>Checksum: {this.state.version ? this.state.version : 'Unknown'}</p>

        <div className='backContainer'>
          <button
            onClick={event => {
              event.preventDefault()
              history.push('/')
            }}
          >back</button>
        </div>
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
  width: 100%;

  .innerContent {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    padding: 60px 20px 0 20px;
    height: 100vh;
  }

  .backContainer {
    margin-top: 40px;
    text-align: right;
  }
`
