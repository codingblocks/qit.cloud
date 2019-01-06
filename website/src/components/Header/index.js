import styled from 'styled-components'

export default styled.header`
  width: 100%;
  max-width: 800px;
  height: 56px;
  color: #FFF;
  background: #298478;
  position: fixed;
  font-size: 20px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  padding: 16px 16px 0 16px;
  will-change: transform;

  transition: transform 0.233s cubic-bezier(0, 0, 0.21, 1) 0.1s;
  z-index: 1000;
`
