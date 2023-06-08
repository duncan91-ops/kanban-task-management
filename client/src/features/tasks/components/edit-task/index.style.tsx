import styled from "styled-components";

const StyledEditTask = styled.form`
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
    font-weight: 700;
    font-size: 1.8rem;
    color: ${(props) => props.theme.textPrimary};
    text-transform: capitalize;
  }

  .label {
    display: inline-block;
    margin-bottom: 0.8rem;
    color: ${(props) => props.theme.textPrimary};
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .input-container {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    position: relative;
  }

  .error-msg {
    display: inline-block;
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--cta-secondary);
    font-size: 1.3rem;
    line-height: 2.3rem;
    font-weight: 500;
  }

  .subtasks .error-msg {
    right: 35px;
  }

  .input {
    flex-grow: 1;
    background-color: transparent;
    font-size: 1.3rem;
    line-height: 2.3rem;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    font-weight: 500;
    color: ${(props) => props.theme.textPrimary};

    &:focus-visible {
      outline: none;
      border: 1px solid var(--cta-primary);
    }

    &.error {
      border: 1px solid var(--cta-secondary);
    }
  }

  .task-description {
    overflow: hidden;
    resize: none;
  }

  .subtasks {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .btn {
    &__append {
      width: 100%;
      background-color: #fff;
      border-radius: 20px;
      color: var(--cta-primary);
      font-size: 1.3rem;
      line-height: 2.3rem;
      text-transform: capitalize;
      font-weight: 700;
      text-align: center;
      padding: 0.8rem 0;

      &.light {
        background-color: rgba(99, 95, 199, 0.1);
      }
    }

    &__submit {
      background-color: var(--cta-primary);
      color: #fff;
      border-radius: 20px;
      font-size: 1.3rem;
      line-height: 2.3rem;
      text-transform: capitalize;
      font-weight: 700;
      text-align: center;
      padding: 0.8rem 0;
      transition: 0.3s background-color ease-in;

      &:hover {
        background-color: var(--cta-primary-light);
      }
    }

    &__select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background-color: transparent;
      color: ${(props) => props.theme.textPrimary};
      font-size: 1.3rem;
      line-height: 2.3rem;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      border: 1px solid rgba(130, 143, 163, 0.25);
      font-weight: 500;

      &.open {
        border: 1px solid var(--cta-primary);
      }
    }

    &__status {
      width: 16rem;
      font-size: 1.3rem;
      line-height: 2.3rem;
      color: var(--text-primary);
      font-weight: 500;
      text-align: left;
    }
  }

  .status {
    &__options {
      width: 100%;
      position: absolute;
      left: 0;
      top: calc(100% + 5px);
      background-color: ${(props) => props.theme.bgSecondary};
      border-radius: 8px;
      box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
      padding: 1.6rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    max-width: 48rem;
    min-width: 30rem;
    width: 91.4%;
    padding: 2.4rem;
  }
`;

export default StyledEditTask;
