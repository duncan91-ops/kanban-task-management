import styled from "styled-components";

const StyledLogin = styled.section`
  display: flex;
  flex-direction: row-reverse;
  
  .form-container {
    padding: 3rem;
    background-color: ${props => props.theme.bgPrimary};
    border-radius: 2rem;
    width: 30%;
    min-width: 50rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  .form-title {
    color: ${props => props.theme.textPrimary};
    text-transform: capitalize;
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`

export default StyledLogin