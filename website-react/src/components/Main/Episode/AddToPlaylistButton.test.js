/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import AddToPlaylistButton from './AddToPlaylistButton'
import AddToPlaylistImage from '../../../assets/addToPlaylist.png'
import AddedToPlaylistImage from '../../../assets/addedToPlaylist.png'

describe('<AddToPlaylistButton />', () => {
  it('should render without any props', () => {
    const wrapper = shallow(<AddToPlaylistButton />)
    const button = wrapper.dive().find('button')
    expect(button).not.toBeNull()
  })
})

describe('<AddToPlaylistButton className="{string}" />', () => {
  it('className property should be included', () => {
    const expectedValue = (new Date()).getTime().toString()
    const wrapper = shallow(<AddToPlaylistButton className={expectedValue} />)
    const button = wrapper.dive().find('button')
    expect(button.props().className).toContain(expectedValue)
  })
})

describe('<AddToPlaylistButton added="{boolean}" />', () => {
  it('should be set to added image when added is true', () => {
    const wrapper = shallow(<AddToPlaylistButton added={false} />)
    const img = wrapper.dive().find('button').find('img')
    expect(img.props().src).toContain(AddToPlaylistImage)
  })

  it('should be set to added image when added is true', () => {
    const wrapper = shallow(<AddToPlaylistButton added />)
    const img = wrapper.dive().find('button').find('img')
    expect(img.props().src).toContain(AddedToPlaylistImage)
  })
})

describe('<AddToPlaylistButton onclick="{function}" />', () => {
  it('should trigger the function on button click', () => {
    const customMethod = sinon.spy()
    const wrapper = shallow(<AddToPlaylistButton onClick={customMethod} />)
    const button = wrapper.dive().find('button')
    button.simulate('click')
    expect(customMethod).toHaveProperty('callCount', 1)
  })
})
