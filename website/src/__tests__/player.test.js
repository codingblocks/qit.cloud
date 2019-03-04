import React from 'react'
import { mount, render, shallow } from 'enzyme'
import {divBreakdown, renderDiv, mockEpisodes} from '../setup'
import Queue from '../components/Main/Queue'

it('Smoke test', () => {
  expect(true).toEqual(true);
});

describe('Will play audio file', () => {
  beforeAll(() => renderDiv)

  afterAll(() => divBreakdown)
  
  it('should render', () => {
    const queue = shallow(< Queue mockEpisodes />)
    expect(queue).toBeDefined()
  }); 

  it('Will show queue items', () =>{
    expect.arrayContaining(mockEpisodes[0].episodeTitle)
    expect.arrayContaining(mockEpisodes[1].episodeTitle)
    expect.arrayContaining(mockEpisodes[2].episodeTitle)
  })
  
  it('Episode is clickable', () => {
    const queue = shallow(< Queue mockEpisodes />)
    queue.find('data-type-search').simulate('click')
    expect(true).toEqual(true)
    expect.toHaveBeenCalled(1)
  });

});