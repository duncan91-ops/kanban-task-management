import styled from "styled-components";

const StyledBoardDetail = styled.section`
  min-height: calc(100vh - 9.7rem);
  padding: 2.4rem;
  display: flex;
  overflow-x: auto;

  .columns {
    display: grid;
    grid-template-rows: 1;
    grid-auto-flow: column;
    grid-column-gap: 2.4rem;
    transition: 0.3s transform ease-in;

    &.open {
      transform: translateX(30rem);
    }
  }

  .message-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
    transition: 0.3s transform ease-in;

    &.open {
      transform: translateX(15rem);
    }

    &__text {
      color: var(--text-primary);
      font-weight: 700;
      font-size: 1.8rem;
      text-align: center;
    }

    &__btn {
      padding: 1.5rem 1.8rem;
      border-radius: 24px;
      background-color: var(--cta-primary);
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-transform: capitalize;
      transition: 0.3s background-color ease-in;

      &:hover {
        background-color: var(--cta-primary-light);
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .message {
      &.open {
        transform: translateX(0);
      }
    }
  }

  @media screen and (max-width: 1279px) {
    min-height: calc(100vh - 8.1rem);

    .columns {
      &.open {
        transform: translateX(26.1rem);
      }
    }
  }

  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 6.4rem);
    padding: 2.4rem 1.6rem;

    .columns {
      &.open {
        transform: translateX(0);
      }
    }
  }
`;

export default StyledBoardDetail;
