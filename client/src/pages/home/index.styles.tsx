import styled from "styled-components";

const StyledHome = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgSecondary};

  .content {
    min-height: calc(100vh - 9.7rem);
  }
`;

export default StyledHome;
