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
`;

export default StyledBoardsHome;
