import React, {Component} from 'react'
import {actions} from 'mirrorx'
import styled from 'styled-components'

export class Search extends Component {
  constructor (props) {
    super(props)
    this.input = React.createRef()
  }

  render () {
    const {className, searchTerm} = this.props
    return (
      <form
        className={className}
        onSubmit={event => {
          event.preventDefault()
          actions.search.search()
        }}
      >
        <input
          ref={this.input}
          placeholder='Search for a great podcast here!'
          value={searchTerm}
          onChange={event => actions.search.updateSearchTerm(event.target.value)}
        />
      </form>
    )
  }
}

export default styled(Search)`
  input {
    font-size: 1.5rem;
    text-align: center;
    width: 80%;
    background: none;
    border: none;
    color: white;
    border-bottom: solid 2px rgba(255,255,255,0.3);
  }

  input:focus {
    outline: 0;
  }

  input::placeholder {
    color: white;
  }

  @media screen and (max-width: 500px) {
    input {
      font-size: 1rem;
    }
  }
`
