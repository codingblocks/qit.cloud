import React from 'react'
import {actions} from 'mirrorx'

export default ({searchTerm}) => (
  <form onSubmit={event => {
    event.preventDefault()
    actions.search.search()
  }}>
    <input
      placeholder='Type something here!'
      className='search-input'
      value={searchTerm}
      onChange={event => actions.search.updateSearchTerm(event.target.value)}
    />
  </form>
)
