import styled from "styled-components";

const StyledModal = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  display: none;
  justify-content: center;
  align-items: center;

  &.open {
    display: flex;
  }
`;

export default StyledModal;
