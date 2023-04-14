import styled from 'styled-components'

const StyledModal = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 10;

  &.open {
    display: block
  }
`

export default StyledModal