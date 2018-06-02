import styled from 'styled-components'

const Main = styled.main`
  padding-top: 60px;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
`

Main.defaultProps = {
  results: []
}

export default Main
