import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import playNextImage from '../../../assets/playNext.png'

export const playNextButton = ({className, onClick}) => (
  <button
    className={className}
    onClick={onClick}
  >
    <img
      src={playNextImage}
      alt='Play this episode next.'
    />
  </button>
)

playNextButton.defaultProps = {
  className: '',
  onClick: () => {}
}

playNextButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default styled(playNextButton)`
  border: none;
  float: right;
  background: transparent;

  img {
      width: 30px;
  }
`
