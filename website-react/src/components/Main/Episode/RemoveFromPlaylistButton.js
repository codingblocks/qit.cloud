import React from 'react'
import styled from 'styled-components'
import RemoveFromPlaylistImage from '../../../assets/removeFromPlaylist.png'

export const RemoveFromPlaylistButton = ({className, onClick}) => (
  <button
    className={className}
    onClick={onClick}
  >
    <img
      src={RemoveFromPlaylistImage}
      alt='Remove episode from playlist.'
    />
  </button>
)

export default styled(RemoveFromPlaylistButton)`
  border: none;
  float: right;
  background: transparent;

  img {
      width: 30px;
  }
`
