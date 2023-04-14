import styled from 'styled-components'

const StyledWelcome = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 30rem;
  width: 60%;
  transform: translate(-50%, -50%);
  text-align: center;

  .title {
    display: inline-block;
    background: linear-gradient(var(--cta-primary), var(--cta-primary-light));
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 7rem;
    letter-spacing: 1.5rem;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }

  .message {
    color: ${props => props.theme.textPrimary};
    font-size: 2.4rem;
    margin-bottom: 8rem;
  }

  .btn {
    &__join {
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

export default StyledWelcome