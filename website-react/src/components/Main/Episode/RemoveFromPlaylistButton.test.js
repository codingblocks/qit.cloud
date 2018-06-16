/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import RemoveFromPlaylistButton from './RemoveFromPlaylistButton'

describe('<RemoveFromPlaylistButton />', () => {
  it('should render without any props', () => {
    const wrapper = shallow(<RemoveFromPlaylistButton />)
    const button = wrapper.dive().find('button')
    expect(button).not.toBeNull()
  })
})

describe('<RemoveFromPlaylistButton className="{string}" />', () => {
  it('className property should be included', () => {
    const expectedValue = (new Date()).getTime().toString()
    const wrapper = shallow(<RemoveFromPlaylistButton className={expectedValue} />)
    const button = wrapper.dive().find('button')
    expect(button.props().className).toContain(expectedValue)
  })
})

describe('<RemoveFromPlaylistButton onclick="{function}" />', () => {
  it('should trigger the function on button click', () => {
    const customMethod = sinon.spy()
    const wrapper = shallow(<RemoveFromPlaylistButton onClick={customMethod} />)
    const button = wrapper.dive().find('button')
    button.simulate('click')
    expect(customMethod).toHaveProperty('callCount', 1)
  })
})
