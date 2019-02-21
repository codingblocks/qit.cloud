import React from 'react'
import { mount, render, shallow } from 'enzyme'
import sinon from 'sinon'
import {divBreakdown, renderDiv, mockEpisodes} from '../setup'
import {Queue} from '../components/Main/Queue'



it('Smoke test', () => {
  expect(true).toEqual(true);
});

describe('Will play audio file', () => {
  /* beforeAll(() => renderDiv)

  afterAll(() => divBreakdown) */
  
  it('should render', () => {
    const wrapper = mount( <Queue />)
    /* expect(Queue).toContain(mockEpisodes[0].episodeTitle)
    expect(wrapper).toContain(mockEpisodes[1].episodeTitle)
    expect(wrapper).toContain(mockEpisodes[2].episodeTitle) */
   
    expect(wrapper).not.toBeNull()
    
  }); 
})
