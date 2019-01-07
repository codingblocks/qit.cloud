import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'
// import Header from '../components/Header'

describe('Header Block', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<App />, document.getElementById('root'))
      .toJSON
    expect(tree).toMatchSnapshot()
  })
})
