import React from 'react'
import ReactDOM from 'react-dom'


export class renderDiv extends React.Component {
  render() {
    const div = document.createElement('div')
    ReactDOM.render(<Index />, div)
  }
}

export class divBreakdown extends React.Component {
  render() {
    return ReactDOM.unmountComponentAtNode(div)
 }
}
