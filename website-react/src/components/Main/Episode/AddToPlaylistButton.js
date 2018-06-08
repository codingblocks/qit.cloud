import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import AddToPlaylistImage from '../../../assets/addToPlaylist.png'
import AddedToPlaylistImage from '../../../assets/addedToPlaylist.png'

export const AddToPlaylist = ({className, onClick, added}) => (
  <button
    className={className}
    onClick={event => !added && onClick(event)}
  >
    <img
      src={added ? AddedToPlaylistImage : AddToPlaylistImage}
      alt='Add episode to playlist.'
    />
  </button>
)

AddToPlaylist.defaultProps = {
  className: '',
  onClick: () => {},
  added: false
}

AddToPlaylist.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  added: PropTypes.bool.isRequired
}

export default styled(AddToPlaylist)`
  border: none;
  float: right;
  background: transparent;

  img {
    width: 30px;
  }
`
