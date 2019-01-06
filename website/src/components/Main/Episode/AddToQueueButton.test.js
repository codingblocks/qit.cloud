/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme/build'
import sinon from 'sinon'

import AddToQueueButton from './AddToQueueButton'
import AddToQueueImage from '../../../assets/addToQueue.png'
import AddedToQueueImage from '../../../assets/addedToQueue.png'

describe('<AddToQueueButton />', () => {
  it('should render without any props', () => {
    const wrapper = shallow(<AddToQueueButton />)
    const button = wrapper.dive().find('button')
    expect(button).not.toBeNull()
  })
})

describe('<AddToQueueButton className="{string}" />', () => {
  it('className property should be included', () => {
    const expectedValue = (new Date()).getTime().toString()
    const wrapper = shallow(<AddToQueueButton className={expectedValue} />)
    const button = wrapper.dive().find('button')
    expect(button.props().className).toContain(expectedValue)
  })
})

describe('<AddToQueueButton added="{boolean}" />', () => {
  it('should be set to added image when added is true', () => {
    const wrapper = shallow(<AddToQueueButton added={false} />)
    const img = wrapper.dive().find('button').find('img')
    expect(img.props().src).toContain(AddToQueueImage)
  })

  it('should be set to added image when added is true', () => {
    const wrapper = shallow(<AddToQueueButton added />)
    const img = wrapper.dive().find('button').find('img')
    expect(img.props().src).toContain(AddedToQueueImage)
  })
})

describe('<AddToQueueButton onclick="{function}" />', () => {
  it('should trigger the function on button click', () => {
    const customMethod = sinon.spy()
    const wrapper = shallow(<AddToQueueButton onClick={customMethod} />)
    const button = wrapper.dive().find('button')
    button.simulate('click')
    expect(customMethod).toHaveProperty('callCount', 1)
  })
})
