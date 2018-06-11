import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import DragNDropImage from '../../../assets/dragndrop.png'

export const DragNDropIndicator = ({ className }) => (
  <button className={className}>
    <img
      src={DragNDropImage}
      alt='Drag and Drop to Reorder Playlist.'
    />
  </button>
)

DragNDropIndicator.defaultProps = {
  className: ''
}

DragNDropIndicator.propTypes = {
  className: PropTypes.string
}

export default styled(DragNDropIndicator)`
  position: absolute;
  right: 0;
  bottom: 0;

  min-width: 48px;
  min-height: 48px;

  border: none;
  background: transparent;

  img {
      width: 30px;
  }
`
