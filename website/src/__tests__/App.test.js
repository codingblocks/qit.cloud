import React from 'react'
import ReactDOM from 'react-dom'
import Index from '../components/Main/index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Index />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// replacement test while real tests are not written

window.it('should run smoke test', () => console.log('write real tests'))
