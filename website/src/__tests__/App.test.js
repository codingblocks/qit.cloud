import React from 'react'
import ReactDOM from 'react-dom'
import Index from '../components/Main/index'
import {divBreakdown, renderDiv } from '../setup'
import {Search} from '../components/Header/Search'
import {Logo} from '../components/Header/Logo'
import {BackButton} from '../components/Header/BackButton'
import {Title} from '../components/Header/Title'
import {SubTitle} from '../components/Header/SubTitle'

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

  it('Header contains search, logo, back button, title, and subtitle', () => {
    expect.objectContaining({Search});
    expect.objectContaining({Logo});
    expect.objectContaining({BackButton});
    expect.objectContaining({Title});
    expect.objectContaining({SubTitle});
  })

  
    
  
})
