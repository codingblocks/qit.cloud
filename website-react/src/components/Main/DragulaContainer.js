import React, { Component } from 'react'
import Dragula from 'react-dragula'

class DragulaContainer extends Component {
  render () {
    return (
      <div
        id='queue'
        ref={this.dragulaDecorator}
      >
        {this.props.children}
      </div>
    )
  }

  dragulaDecorator (componentBackingInstance) {
    if (componentBackingInstance) {
      let options = {}
      Dragula([componentBackingInstance], options)
    }
  }
}

export default DragulaContainer
