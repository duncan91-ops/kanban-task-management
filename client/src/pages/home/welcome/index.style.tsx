import styled from "styled-components";

const StyledWelcome = styled.section`
  min-width: 30rem;
  width: 60%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    color: ${(props) => props.theme.textPrimary};
    font-size: 2.4rem;
    line-height: 4rem;
    margin-bottom: 8rem;
  }

  .btn {
    &__join,
    &__boards {
      background-color: var(--cta-primary);
      color: var(--white-primary);
      font-size: 2.4rem;
      padding: 1.5rem 2.5rem;
      border-radius: 3rem;
      transition: 0.3s all ease-in;

      &:hover {
        background-color: var(--cta-primary-light);
      }
    }
  }

  @media screen and (max-width: 1279px) {
    .title {
      font-size: 4.5rem;
      letter-spacing: 1rem;
    }

    .message {
      font-size: 1.8rem;
      line-height: 3rem;
      margin-bottom: 6rem;
    }

    .btn {
      &__boards,
      &__join {
        font-size: 2rem;
        padding: 1rem 2rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .title {
      font-size: 3.2rem;
      letter-spacing: 0.5rem;
    }

    .message {
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-bottom: 3rem;
    }

    .btn {
      &__boards,
      &__join {
        font-size: 1.6rem;
        padding: 1rem 2rem;
      }
    }
  }
`;

export default StyledWelcome;
