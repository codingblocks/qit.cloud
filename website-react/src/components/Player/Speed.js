import styled from 'styled-components'

export default styled.button`
  position: absolute;
  left: 15px;
  font-size: 1rem;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: solid 2px white;
  background: white;
  color: #359189;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: 0;
  }
`
