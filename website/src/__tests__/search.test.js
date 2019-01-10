import React from 'react'
import ReactDOM from 'react-dom'
import {divBreakdown, renderDiv } from '../setup'
import {Search, SearchWithRouter} from '../components/Header/Search'

describe('Search Props', () => {
  beforeAll(() => {
    renderDiv
  })

  afterAll(() =>{
    divBreakdown
  })

  it('Search default should be empty', () =>{
  expect(Search.classname).toBeUndefined();
  expect(Search.searchTerm).toBeUndefined();
  })
})