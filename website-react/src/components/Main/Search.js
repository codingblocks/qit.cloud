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
    font-size: 24pt;
  }
`
