import styled from "styled-components";

const StyledActivate = styled.section`
  min-height: calc(100vh - 9.7rem);
  position: relative;

  .content {
    margin: 0 auto;
    max-width: 50rem;
    min-width: 30rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
    text-align: center;
    transform: translateY(-5rem);
    color: ${(props) => props.theme.textPrimary};
  }

  .title {
    font-size: 3.6rem;
    font-weight: 700;
    color: var(--cta-secondary);
  }

  .btn {
    border-radius: 20px;
    padding: 1rem 2.5rem;
    font-size: 2rem;
    align-self: center;

    &__activate {
      background-color: var(--cta-primary);
      color: #fff;
      transition: 0.3s background-color ease-in;

      &:hover {
        background-color: var(--cta-primary-light);
      }
    }
  }

  .error {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--cta-secondary);
    padding: 1rem;
    color: #fff;
    border-radius: 8px;
  }

  @media screen and (max-width: 1279px) {
    min-height: calc(100vh - 8.1rem);

    .title {
      font-size: 3rem;
    }

    .btn {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 6.4rem);

    .title {
      font-size: 2.4rem;
    }

    .btn {
      font-size: 1.6rem;
    }
  }
`;

export default StyledActivate;
