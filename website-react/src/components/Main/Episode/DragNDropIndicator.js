import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { SortableHandle } from 'react-sortable-hoc'

import DragNDropImage from '../../../assets/dragndrop.png'

// Other images have 48px size, while drag handle has 30px dimension.
// Need to make up for that 9px x 2 by setting the margin to 9px all around.
const DragHandleImage = styled.img.attrs({
  className: 'drag-handle',
  src: DragNDropImage,
  alt: 'Drag and Drop to Reorder Playlist.'
})`
  margin: 9px;
`

export const DragNDropIndicator = SortableHandle(({ className }) => (
  <span
    className={className}
    data-playlist={'drag'}
    onMouseDown={e => e.preventDefault()}
  >
    <DragHandleImage />
  </span>
))

DragNDropIndicator.defaultProps = {
  className: 'drag-handle'
}

DragNDropIndicator.propTypes = {
  className: PropTypes.string
}

export default styled(DragNDropIndicator)`
  min-width: 48px;
  min-height: 48px;

  border: none;
  background: transparent;

  cursor: grab;

  img {
    width: 30px;
  }
`
