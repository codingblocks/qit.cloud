import React from 'react'
import styled from 'styled-components'
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

export default styled(AddToPlaylist)`
  border: none;
  float: right;
  background: transparent;

  img {
    width: 30px;
  }
`
