/* global div */

import React from 'react'
import ReactDOM from 'react-dom'

export class renderDiv extends React.Component {
  render () {
    const div = document.createElement('div')
    ReactDOM.render(<div />, div)
  }
}

export class divBreakdown extends React.Component {
  render () {
    return ReactDOM.unmountComponentAtNode(div)
  }
}

export function Header () {
  return (
    <div>
      <div data-testid='header' className='in-header' />
    </div>
  )
}

export const serverMock = {
  myMethod: jest
  .fn()
  .mockReturnThis()
};
