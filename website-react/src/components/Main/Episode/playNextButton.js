import React from 'react'
import styled from 'styled-components'
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

export default styled(playNextButton)`
  border: none;
  float: right;
  background: transparent;

  img {
      width: 30px;
  }
`
