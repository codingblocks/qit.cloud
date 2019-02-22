import React from 'react'
import { mount, render, shallow } from 'enzyme'
import sinon from 'sinon'
import {divBreakdown, renderDiv, mockEpisodes} from '../setup'
import {Index} from '../components/Main/index'
import {Queue} from '../components/Main/Queue'



it('Smoke test', () => {
  expect(true).toEqual(true);
});

describe('Will play audio file', () => {
  beforeAll(() => renderDiv)

  afterAll(() => divBreakdown)
  
  it('should render', () => {
    expect(Queue).toBeDefined()
  }); 

  it('Will show queue items', () =>{
    const episodes = {mockEpisodes}
    const fakeQueue = jest.fn(episodes => episodes.episodeTitle);
    expect(Queue, mockEpisodes).toBeDefined()
    expect(fakeQueue).toHaveReturnedWith(mockEpisodes[0].episodeTitle)
    /*const wrapper = .find (Queue)
    .renderProp('queue', mockEpisodes)
    expect(Queue).toContain(mockEpisodes[0].episodeTitle)
    expect(wrapper).toContain(mockEpisodes[1].episodeTitle)
    expect(wrapper).toContain(mockEpisodes[2].episodeTitle) */
  })
})
