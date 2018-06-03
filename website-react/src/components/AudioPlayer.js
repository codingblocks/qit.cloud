import styled from 'styled-components';

export default styled.audio`
  position: fixed;
  bottom: 20px;
  width: 100%;

  &::-webkit-media-controls-panel {
    background: #4F8F88;
    padding: 10px 0 10px 0;
  }

  &::-webkit-media-controls-play-button {
    color: white;
  }
`
