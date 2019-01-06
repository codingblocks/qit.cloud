import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import AddToQueueImage from '../../../assets/addToQueue.png'
import AddedToQueueImage from '../../../assets/addedToQueue.png'

export const AddToQueue = ({className, onClick, added}) =>
  <button
    className={className}
    onClick={event => !added && onClick(event)}
    data-queue={'add'}
  >
    <img
      src={added ? AddedToQueueImage : AddToQueueImage}
      alt='Add episode to queue.'
    />
  </button>

AddToQueue.defaultProps = {
  className: '',
  onClick: () => {},
  added: false
}

AddToQueue.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  added: PropTypes.bool.isRequired
}

export default styled(AddToQueue)`
  border: none;
  background: transparent;
  min-height: 48px;
  min-width: 48px;

  img {
    width: 30px;
  }
`
