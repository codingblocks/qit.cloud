import React from 'react'
import { mount, render, shallow } from 'enzyme'
import {divBreakdown, renderDiv, mockEpisodes} from '../setup'
import {Index} from '../components/Main/index'
import Queue from '../components/Main/Queue'

it('Smoke test', () => {
  expect(true).toEqual(true);
});

describe('Will play audio file', () => {
  beforeAll(() => renderDiv)

  afterAll(() => divBreakdown)
  
  it('should render', () => {
    const queueList = shallow(< Queue mockEpisodes />)
    expect(queueList).toBeDefined()
    console.log(queueList)
  }); 

  it('Will show queue items', () =>{
    expect.arrayContaining(mockEpisodes[0].episodeTitle)
    expect.arrayContaining(mockEpisodes[1].episodeTitle)
    expect.arrayContaining(mockEpisodes[2].episodeTitle)
  })
})
