import styled from "styled-components";

const StyledHome = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgSecondary};

  .content {
    min-height: calc(100vh - 9.7rem);
  }

  @media screen and (max-width: 1279px) {
    .content {
      min-height: calc(100vh - 8.1rem);
    }
  }

  @media screen and (max-width: 767px) {
    .content {
      min-height: calc(100vh - 6.4rem);
    }
  }
`;

export default StyledHome;
