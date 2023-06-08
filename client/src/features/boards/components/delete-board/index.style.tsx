import styled from "styled-components";

const StyledDeleteBoard = styled.form`
  padding: 3.2rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 50rem;
  min-width: 48rem;
  width: 33%;
  margin: 0 auto;

  .title {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--cta-secondary);
  }

  .message {
    color: var(--text-primary);
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2.3rem;
  }

  .btns {
    display: flex;
    gap: 1.6rem;
    margin-bottom: 0.8rem;
  }

  .btn {
    border-radius: 20px;
    padding: 0.8rem 0;
    flex-grow: 1;

    &__delete {
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

  @media screen and (max-width: 767px) {
    max-width: 48rem;
    min-width: 30rem;
    width: 91.4%;
    padding: 2.4rem;
  }
`;

export default StyledDeleteBoard;
