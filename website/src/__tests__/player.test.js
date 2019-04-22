/* eslint-env jest */
import React from 'react'
import { mount, render, shallow } from 'enzyme/build'
import {divBreakdown, renderDiv, mockEpisodes} from '../setup'
import sinon from 'sinon'
import Queue from '../components/Main/Queue'
import EpisodeTitle from '../components/Main/Episode/EpisodeTitle';

// const handleClickStub = sinon.spy()

it('Smoke test', () => {
  expect(true).toEqual(true)
  });

describe('Will play audio file', () => {
  beforeEach(() => {
  const queue = shallow(<Queue queue = {mockEpisodes}/>);
  renderDiv})
 

  afterEach(() => divBreakdown)
  
  it('Will show queue items', () =>{
    expect.arrayContaining(mockEpisodes[0].episodeTitle)
    expect.arrayContaining(mockEpisodes[1].episodeTitle)
    expect.arrayContaining(mockEpisodes[2].episodeTitle)
  })
  
  
});