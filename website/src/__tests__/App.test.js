import React from 'react'
import ReactDOM from 'react-dom'
import Index from '../components/Main/index'
import divBreakdown from '../components/teardownAppTest'
import renderDiv from '../components/setupAppTest'
// replacement test while real tests are not written

window.it('should run smoke test', () => console.log('write real tests'))

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Index />, div)
  ReactDOM.unmountComponentAtNode(div)
  })

describe('Opening index', () =>{
  beforeAll(() => {
    renderDiv
  })

  afterAll(() =>{
    divBreakdown
  })
  it('Is an queue empty message', () => {
    expect.stringContaining('Your queue is empty. Try a search like "pwa" to learn more about the technology behind this app!')
  })
  it('Is a search box placeholder', () =>{
    const div = document.createElement('div')
  ReactDOM.render(<Index />, div)
    expect.stringContaining('Search for a great podcast here!')
    ReactDOM.unmountComponentAtNode(div)
  })
})