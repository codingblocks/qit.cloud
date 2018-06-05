import React from 'react'
import styled from 'styled-components'
import RemoveFromPlaylistImage from '../../../assets/removeFromPlaylist.png'

export const RemoveFromPlaylist = ({className, onClick, added}) => (
  <button
    className={className}
    onClick={onClick}
  >
    <img
      src={RemoveFromPlaylistImage}
      alt='remove from playlist'
    />
  </button>
)

export default styled(RemoveFromPlaylist)`
  border: none;
  float: right;
  background: transparent;
  img {
      width: 30px;
  }
`
