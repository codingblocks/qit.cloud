import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import Index from '../components/Main/index'
import {divBreakdown, renderDiv } from '../setup'
import {Search, SearchWithRouter} from '../components/Header/Search'
import { Logo } from '../components/Header/Logo';

// replacement test while real tests are not written

window.it('should run smoke test', () => console.log('write real tests'))

it('Renders without crashing', () => {
  const tree = shallow(<Index />)
  const shot = (tree).toJSON
  expect(shot).toMatchSnapshot();
})

describe('Opening index', () => {
  beforeAll(() => renderDiv)

  afterAll(() => divBreakdown)

  it('Is an queue empty message', () => {
    expect.stringContaining(
      'Your queue is empty. Try a search like "pwa" to learn more about the technology behind this app!'
    )
  })

  it('Is a search box placeholder', () => {
    expect.stringContaining('Search for a great podcast here!')
  })


  it('Header contains search, logo', () => {
    expect.objectContaining({Search});
    expect.objectContaining({SearchWithRouter});
    expect(Logo).toBeDefined();
  })
})
