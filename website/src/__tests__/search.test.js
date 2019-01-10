import React from 'react'
import ReactDOM from 'react-dom'
import {divBreakdown, renderDiv } from '../setup'
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

  /* it('Should have the form showing', () => {
    //const input = document.querySelector('[data-testid="input"]')
    expect(Search.input).toHaveAttribute('placeholder', 'Search for a great podcast here!')
  }) */
})