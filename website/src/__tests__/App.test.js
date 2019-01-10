import React from 'react'
import ReactDOM from 'react-dom'
import Index from '../components/Main/index'
import {divBreakdown, renderDiv } from '../setup'
import {Search} from '../components/Header/Search'

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
    expect.stringContaining('Your queue is empty. Try a search like "pwa" to learn more about the technology behind this app!');
  })

  it('Is a search box placeholder', () =>{
    expect.stringContaining('Search for a great podcast here!');
  })

  it('Search box is wrapped in the header', () => {
    expect.objectContaining({Search});
  })
})
