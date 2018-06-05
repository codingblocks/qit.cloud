import React from 'react'
import {actions} from 'mirrorx'
import styled from 'styled-components'

export const Search = ({searchTerm, className}) => (
  <form
    className={className}
    onSubmit={event => {
      event.preventDefault()
      actions.search.search()
    }}
  >
    <input
      placeholder='Search for a great podcast here!'
      value={searchTerm}
      onChange={event => actions.search.updateSearchTerm(event.target.value)}
    />
  </form>
)

export default styled(Search)`
  input {
    width: 100%;
    height: 60px;
    font-size: 1.5rem;
    border: solid 2px #359189;
    border-radius: 5px;
    padding: 0 10px;
  }

  @media screen and (max-width: 500px) {
    input {
      font-size: 1.2rem;
    }
  }
`
