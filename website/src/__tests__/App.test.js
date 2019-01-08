import React from 'react'
import ReactDOM from 'react-dom'
import Index from '../components/Main/index'

// replacement test while real tests are not written

window.it('should run smoke test', () => console.log('write real tests'))

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Index />, div)
  ReactDOM.unmountComponentAtNode(div)
  })

describe('Opening index', () =>{
  it('Is an queue empty message', () => {
    const div = document.createElement('div')
  ReactDOM.render(<Index />, div)
    expect.stringContaining('Your queue is empty. Try a search like "pwa" to learn more about the technology behind this app!')
    ReactDOM.unmountComponentAtNode(div)
  })
  it('Is a search box placeholder', () =>{
    const div = document.createElement('div')
  ReactDOM.render(<Index />, div)
    expect.stringContaining('Search for a great podcast here!')
    ReactDOM.unmountComponentAtNode(div)
  })
})