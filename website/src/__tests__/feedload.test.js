/* eslint-env jest */
import React from 'react'
import {
  shallow
} from 'enzyme/build'
import {
  divBreakdown,
  renderDiv,
  mockEpisodes
} from '../setup'
// import sinon from 'sinon'
import Queue from '../components/Main/Queue'
//import EpisodeTitle from '../components/Main/Episode/EpisodeTitle';

// const handleClickStub = sinon.spy()

it('Smoke test', () => {
  expect(true).toEqual(true)
})

describe('Will load JSON', () => {
  beforeEach(() => {
    /* const mockQueue = shallow( < Queue queue = {
        mockEpisodes
      }
      />)*/
      renderDiv
    })


  afterEach(() => divBreakdown)

  it('Will import JSON items', () => {
    
  })

  it('Will ignore missing info', () => {
    
  })

  it('Reject items missing basic information', () => {
    
  })

})

describe('Feed Loader Information checks', () => {
  beforeEach(() => {
    
      renderDiv
    })


  afterEach(() => divBreakdown)

  it('Podcast Name', () => {
    
  })

  it('URL formatted corectly', () => {
    
  })

  
})