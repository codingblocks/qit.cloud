import React from 'react'
import { shallow } from 'enzyme';
import {divBreakdown, renderDiv, Header } from '../setup'
import {Search} from '../components/Header/Search'
import 'jest-dom/extend-expect'

describe('Search Props', () => {
  beforeAll(() => {
    renderDiv
  })

  afterAll(() =>{
    divBreakdown
  })

  it('Search defaults should be empty', () =>{
  expect(Search.defaultProps.className).toEqual("");
  expect(Search.defaultProps.searchTerm).toEqual("");
  })

  it('Should have the form and input showing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('[data-testid="form"]'));
    expect(wrapper.find('[data-testid="input"]'));
  })
})
