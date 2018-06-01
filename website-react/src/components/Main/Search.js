import React from 'react'
import {actions} from 'mirrorx'

export default props => (
  <form onSubmit={event => {
    event.preventDefault()
    actions.search.search()
  }}>
    <input
      placeholder='Type something here!'
      className='search-input'
      value={props.searchTerm}
      onChange={event => actions.search.updateSearchTerm(event.target.value)}
    />
  </form>
)
