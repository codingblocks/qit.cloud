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

describe('Will load audio file', () => {
  beforeEach(() => {
    const mockQueue = shallow( < Queue queue = {
        mockEpisodes
      }
      />)
      renderDiv
    })


  afterEach(() => divBreakdown)

  it('Will import queue items', () => {
    console.table(mockQueue)
    expect.arrayContaining(mockEpisodes[0].episodeTitle)
    expect.arrayContaining(mockEpisodes[1].episodeTitle)
    expect.arrayContaining(mockEpisodes[2].episodeTitle)
  })

  it('Will display queue items', () => {
    
  })

  it('Will select single item', () => {
    
  })

  it('Will load audio file', () => {
    
  })
})

describe('Player controls function as intended', () => {
  beforeEach(() => {
    const mockQueue = shallow( < Queue queue = {
        mockEpisodes
      }
      />)
      renderDiv
    })


  afterEach(() => divBreakdown)

  it('Audio will play at speed set', () => {
    
  })

  it('Audio speed slows', () => {
    
  })

  it('Audio speed increses', () => {
    
  })

  it('Skip back works, mid file', () => {
    
  })

  it('Skip forward works, mid file', () => {
    
  })

  it('Skip back is ignored, start of file', () => {
    
  })

  it('Skip forward is ignored, end of file', () => {
    
  })

  it('Audio speed will not slow below threshold', () => {
    
  })

  it('Audio speed will not increase above threshold', () => {
    
  })
})