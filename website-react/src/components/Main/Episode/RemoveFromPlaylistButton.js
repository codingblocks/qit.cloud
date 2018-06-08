import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

RemoveFromPlaylistButton.defaultProps = {
  className: '',
  onClick: () => {}
}

RemoveFromPlaylistButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default styled(RemoveFromPlaylistButton)`
  border: none;
  float: right;
  background: transparent;

  img {
      width: 30px;
  }
`
