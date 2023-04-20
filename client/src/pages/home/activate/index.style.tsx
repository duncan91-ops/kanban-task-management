import styled from "styled-components";

const StyledActivate = styled.section`
  margin-top: 10rem;
  text-align: center;
  
  .title {
    font-size: 6rem;
    color: ${props => props.theme.textPrimary};
    margin-bottom: 3rem;
    text-transform: capitalize;
    text-align: center;
  }

  .btn {
    &__activate {
      background-color: var(--cta-primary);
      color: var(--white-primary);
      font-size: 3rem;
      padding: 1.5rem 3.5rem;
      border-radius: 3rem;
      transition: .3s all ease-in;

      &:hover {
        background-color: var(--cta-primary-light);
      }
    }
  }
`

export default StyledActivate