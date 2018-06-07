import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(450deg); }
`

const line = keyframes`
  0% {
      stroke-dasharray: 2, 85.964;
      transform: rotate(0);
  }

  50% {
      stroke-dasharray: 65.973, 21.9911;
      stroke-dashoffset: 0;
  }

  100% {
      stroke-dasharray: 2, 85.964;
      stroke-dashoffset: -65.973;
      transform: rotate(90deg);
  }
`

export const LoaderCircle = styled.circle`
  box-sizing: border-box;
  stroke: #ff9a02;
  stroke-width: 3px;
  transform-origin: 50%;
  animation: ${line} 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, ${rotate} 1.6s linear infinite;
`

export const LoaderSVG = styled.svg`
  left: 50%;
  top: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
`

export default () => (
  <LoaderSVG viewBox='0 0 32 32' width='32' height='32'>
    <LoaderCircle cx='16' cy='16' r='14' fill='none' />
  </LoaderSVG>
)
