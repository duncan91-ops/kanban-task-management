import styled from "styled-components";

const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .formInputContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:last-child {
      margin-bottom: 4rem;
    }
  }

  .label {
    text-transform: capitalize;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: ${props => props.theme.labelColor};
  }

  .formInput {
    width: 100%;
    padding: 1.6rem 2rem;
    font-size: 1.5rem;
    line-height: 1.8rem;
    border-radius: 4px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background-color: ${props => props.theme.bgPrimary};
    color: ${props => props.theme.textPrimary};

    &:focus {
      outline: none;
      border: 1px solid var(--cta-primary);
    }
  }

  .btn {
    &__submit {
      align-self: flex-start;
      color: #fff;
      background-color: var(--cta-primary);
      border-radius: 2.4rem;
      padding: 1.6rem 2rem;
      text-transform: capitalize;
      font-size: 1.5rem;
      line-height: 1.8rem;
      transition: 0.2s all ease-in;

      &:hover {
        background-color: var(--cta-primary-light);
      }
    }
  }

  .small {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: ${props => props.theme.textPrimary};
  }

  .login {
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: var(--cta-primary);
    text-transform: capitalize;
    transition: 0.2s all ease-in;

    &:hover {
      color: var(--cta-primary-light);
    }
  }
`

export default StyledRegisterForm;