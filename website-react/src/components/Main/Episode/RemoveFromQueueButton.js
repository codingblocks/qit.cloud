import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import RemoveFromQueueImage from '../../../assets/removeFromQueue.png'

export const RemoveFromQueueButton = ({ lonely, className, onClick }) => (
  <button
    className={className}
    onClick={onClick}
    data-queue={'remove'}
  >
    <img
      src={RemoveFromQueueImage}
      alt='Remove episode from queue.'
    />
  </button>
)

RemoveFromQueueButton.defaultProps = {
  lonely: false,
  className: '',
  onClick: () => { }
}

RemoveFromQueueButton.propTypes = {
  lonely: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default styled(RemoveFromQueueButton)`
  /* position: absolute;
  right: ${props => props.lonely ? '0' : '48px'};
  bottom: 0; */

  min-width: 48px;
  min-height: 48px;

  border: none;
  background: transparent;

  img {
      width: 30px;
  }
`
