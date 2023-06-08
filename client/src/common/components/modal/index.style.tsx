import styled from "styled-components";

const StyledModal = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  overflow-y: scroll;
  padding: 9.7rem 0 5rem;

  &.open {
    display: block;
  }

  @media screen and (max-width: 1279px) {
    padding: 8.1rem 0 3rem;
  }

  @media screen and (max-width: 767px) {
    padding: 6.4rem 0 3rem;
  }
`;

export default StyledModal;
