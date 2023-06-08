import styled from "styled-components";

const StyledLogout = styled.section`
  min-height: calc(100vh - 9.7rem);

  .content {
    margin: 0 auto 0;
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

  .message {
    font-size: 2rem;
  }

  .btns {
    display: flex;
    gap: 1.6rem;
  }

  .btn {
    border-radius: 20px;
    padding: 0.8rem 0;
    flex-grow: 1;
    font-size: 2rem;

    &__logout {
      background-color: var(--cta-secondary);
      color: #fff;
      transition: 0.3s background-color ease-in;

      &:hover {
        background-color: var(--cta-secondary-light);
      }
    }

    &__cancel {
      background-color: #fff;
      color: var(--cta-primary);

      &.light {
        background-color: rgba(99, 95, 199, 0.1);
        transition: 0.3s background-color ease-in;

        &:hover {
          background-color: rgba(99, 95, 199, 0.25);
        }
      }
    }
  }

  @media screen and (max-width: 1279px) {
    min-height: calc(100vh - 8.1rem);

    .title {
      font-size: 3rem;
    }

    .message {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 6.4rem);

    .title {
      font-size: 2.4rem;
    }

    .message {
      font-size: 1.6rem;
    }

    .btn {
      font-size: 1.6rem;
    }
  }
`;

export default StyledLogout;
