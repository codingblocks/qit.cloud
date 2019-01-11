import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme';
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
  expect(Search.classname).toBeUndefined();
  expect(Search.searchTerm).toBeUndefined();
  })

  it('Should have the form showing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('[data-testid="form"]'));
  })
})


