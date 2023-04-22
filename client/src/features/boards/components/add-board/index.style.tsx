import styled from "styled-components";

const StyledAddBoard = styled.section`
  padding: 3.2rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .title {
    font-weight: 700;
    font-size: 1.8rem;
    color: ${(props) => props.theme.textPrimary};
    text-transform: capitalize;
  }
`;

export default StyledAddBoard;
