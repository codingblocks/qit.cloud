/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import RemoveFromQueueButton from './RemoveFromQueueButton'

describe('<RemoveFromQueueButton />', () => {
  it('should render without any props', () => {
    const wrapper = shallow(<RemoveFromQueueButton />)
    const button = wrapper.dive().find('button')
    expect(button).not.toBeNull()
  })
})

describe('<RemoveFromQueueButton className="{string}" />', () => {
  it('className property should be included', () => {
    const expectedValue = (new Date()).getTime().toString()
    const wrapper = shallow(<RemoveFromQueueButton className={expectedValue} />)
    const button = wrapper.dive().find('button')
    expect(button.props().className).toContain(expectedValue)
  })
})

describe('<RemoveFromQueueButton onclick="{function}" />', () => {
  it('should trigger the function on button click', () => {
    const customMethod = sinon.spy()
    const wrapper = shallow(<RemoveFromQueueButton onClick={customMethod} />)
    const button = wrapper.dive().find('button')
    button.simulate('click')
    expect(customMethod).toHaveProperty('callCount', 1)
  })
})
