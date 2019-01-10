import React from 'react'

export class divBreakdown extends React.Component {
  render() {
    return ReactDOM.unmountComponentAtNode(div)
 }
}

export class renderDiv extends React.Component {
  render() {
    const div = document.createElement('div')
    ReactDOM.render(<Index />, div)
  }
}
