import styled from "styled-components";

const StyledBoardsHome = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 9.7rem);

  .message {
    max-width: 50rem;
    min-width: 30rem;
    width: 40%;
    color: var(--text-primary);
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
  }

  @media screen and (max-width: 1279px) {
    min-height: calc(100vh - 8.1rem);
  }

  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 6.4rem);
  }
`;

export default StyledBoardsHome;
