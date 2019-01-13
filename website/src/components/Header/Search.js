import React from 'react'
import { actions, withRouter, connect } from 'mirrorx'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Search = ({className, searchTerm, history}) =>
  <form
    data-testid='form'
    className={className}
    onSubmit={event => {
      event.preventDefault()
      event.target.querySelector('input').blur()
      history.push(`/search/"${encodeURIComponent(searchTerm)}"`)
    }}
  >
    <input
      data-testid='input'
      ref={this.input}
      placeholder='Search for a great podcast here!'
      value={searchTerm}
      onChange={event => actions.search.updateSearchTerm(event.target.value)}
      aria-label='Podcast Search'
    />
  </form>

Search.defaultProps = {
  className: '',
  searchTerm: ''
}

Search.propTypes = {
  className: PropTypes.string,
  searchTerm: PropTypes.string
}

const SearchWithRouter = withRouter(Search)

const ConnectedSearch = connect(state => ({
  searchTerm: state.search.searchTerm,
  currentUser: state.user.currentUser
}))(SearchWithRouter)

export default styled(ConnectedSearch)`
  input {
    font-size: 1.5rem;
    text-align: center;
    width: 70%;
    background: none;
    border: none;
    color: white;
    border-bottom: solid 2px rgba(255,255,255,0.3);
  }

  input:focus {
    outline: 0;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 500px) {
    input {
      font-size: 1rem;
    }
  }
`
