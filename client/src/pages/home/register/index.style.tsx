import styled from "styled-components";

const StyledRegister = styled.section`
  display: flex;
  flex-direction: row-reverse;

  .form-container {
    margin: 3.2rem;
    padding: 3rem;
    background-color: ${(props) => props.theme.bgPrimary};
    border-radius: 2rem;
    width: 60%;
    min-width: 30rem;
    max-width: 55rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  .form-title {
    color: ${(props) => props.theme.textPrimary};
    text-transform: capitalize;
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 767px) {
    .form-container {
      padding: 2rem;
    }
  }
`;

export default StyledRegister;
