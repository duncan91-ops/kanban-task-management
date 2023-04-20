import styled from "styled-components";

const StyledBoards = styled.main`
  position: relative;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgSecondary};

  .btn {
    &__show-sidebar {
      width: 5.6rem;
      height: 4.8rem;
      border-radius: 0 100px 100px 0;
      background-color: var(--cta-primary);
      position: fixed;
      left: 0;
      bottom: 3.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s background-color ease-in;

      &:hover {
        background-color: var(--cta-primary-light);
      }
    }
  }
`;

export default StyledBoards;
