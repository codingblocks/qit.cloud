import React from 'react'
import { shallow } from 'enzyme'
import { divBreakdown, renderDiv, Header } from '../setup'
import { Search } from '../components/Header/Search'
import 'jest-dom/extend-expect'

describe('Search Props', () => {
  beforeAll(() => renderDiv)

  afterAll(() => divBreakdown)

  it('Search defaults should be empty', () => {
    expect(Search.defaultProps.className).toEqual('')
    expect(Search.defaultProps.searchTerm).toEqual('')
  })

  it('Should have the form and input showing', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('[data-testid="form"]'))
    expect(wrapper.find('[data-testid="input"]'))
  })

describe('Input checks', () => {
  //TODO - rewite this with a describe.each https://jestjs.io/docs/en/api#describeeachtable-name-fn-timeout to make it easy to test.
  it('Should have placeholder text for blank inputs', () => {
    const wrapper = shallow(<Header />)
    const search = wrapper.find('[data-testid="input"]')
    const inputs = {blank: '', pct:'%'}
    expect(search.length).toBe(0)

    search.value = inputs.blank
    expect(search.value).toBe('')
    expect.stringContaining(
      'Your queue is empty. Try a search like "pwa" to learn more about the technology behind this app!'
    )
    expect.stringContaining('Search for a great podcast here!')
    })
    
    it('Should have placeholder text for % inputs', () => {
      const wrapper = shallow(<Header />)
      const search = wrapper.find('[data-testid="input"]')
      const inputs = {blank: '', pct:'%'}
      expect(search.length).toBe(0)
  
      search.value = inputs.pct
      expect(search.value).toBe('%')
      expect.stringContaining(
        'Your queue is empty. Try a search like "pwa" to learn more about the technology behind this app!'
      )
      expect.stringContaining('Search for a great podcast here!')
      })   
  })
})
