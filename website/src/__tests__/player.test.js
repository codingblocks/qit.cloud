import React from 'react'
import { render } from 'mirrorx'
import App from '../RoutedApp'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import {mockEpisodes} from '../setup'


import Queue from '../components/Main/Queue'

it('Smoke test', () => {
  expect(true).toEqual(true);
});

describe('Will play audio file', () => {
  it('should render all queue episodes', () => {
    const wrapper = shallow(<Queue queue={mockEpisodes} />)
    expect(wrapper).toContain(mockEpisodes[0].episodeTitle)
    expect(wrapper).toContain(mockEpisodes[1].episodeTitle)
    expect(wrapper).toContain(mockEpisodes[2].episodeTitle)
  })
});
