import React from 'react'
import styled from 'styled-components'

export const Episode = ({result}) => (
  <li className='episodeItem' audiourl={result.audioUrl}>
    {result.episodeTitle}
    <div className='podcast-title'>
      {result.podcastTitle}
    </div>
  </li>
)

export default styled(Episode)`
  padding: 8px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
`
