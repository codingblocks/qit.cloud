import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import RemoveFromQueueImage from '../../../assets/removeFromQueue.png'

export const RemoveFromQueueButton = ({ className, onClick }) =>
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

RemoveFromQueueButton.defaultProps = {
  className: '',
  onClick: () => { }
}

RemoveFromQueueButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default styled(RemoveFromQueueButton)`
  min-width: 48px;
  min-height: 48px;

  border: none;
  background: transparent;

  img {
      width: 30px;
  }
`
