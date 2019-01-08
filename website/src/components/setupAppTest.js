import React from 'react'

export default class renderDiv extends React.Component {
  render() {
    const div = document.createElement('div')
    ReactDOM.render(<Index />, div)
  }
}
