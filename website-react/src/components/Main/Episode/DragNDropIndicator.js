import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { SortableHandle } from 'react-sortable-hoc'

import DragNDropImage from '../../../assets/dragndrop.png'

export const DragNDropIndicator = SortableHandle(({ className }) => (
  <span
    className={className}
    data-playlist={'drag'}
    onMouseDown={e => e.preventDefault()}
  >
    <img
      className='drag-handle'
      src={DragNDropImage}
      alt='Drag and Drop to Reorder Playlist.'
    />
  </span>
))

DragNDropIndicator.defaultProps = {
  className: 'drag-handle'
}

DragNDropIndicator.propTypes = {
  className: PropTypes.string
}

export default styled(DragNDropIndicator)`
  position: absolute;
  right: 0;
  bottom: -7px;

  min-width: 48px;
  min-height: 48px;

  border: none;
  background: transparent;

  cursor: grab;

  img {
    width: 30px;
  }
`
