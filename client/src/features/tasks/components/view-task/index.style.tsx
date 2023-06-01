import styled from "styled-components";

const StyledViewTask = styled.section`
  padding: 3.2rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 50rem;
  min-width: 30rem;
  width: 33%;

  .header {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  .title {
    flex-grow: 1;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.3rem;
    color: ${(props) => props.theme.textPrimary};
  }

  .options-box {
    position: relative;
  }

  .options {
    position: absolute;
    right: 0;
    top: calc(100% + 22px);
    padding: 1.6rem;
    display: none;
    flex-direction: column;
    gap: 1.6rem;
    width: 19.2rem;
    background-color: ${(props) => props.theme.bgPrimary};
    border-radius: 8px;
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
    transform: translateX(50%);

    &.open {
      display: flex;
    }

    &.dark {
      background-color: ${(props) => props.theme.bgSecondary};
    }

    &__btn {
      text-align: left;
      font-size: 1.3rem;
      line-height: 2.3rem;
      font-weight: 500;
      text-transform: capitalize;
      transition: 0.3s opacity ease-in;

      &:hover {
        opacity: 0.75;
      }
    }
  }

  .btn {
    &__edit {
      color: var(--text-primary);
    }

    &__delete {
      color: var(--cta-secondary);
    }
  }

  .description {
    font-size: 1.3rem;
    line-height: 2.3rem;
    color: var(--text-primary);
  }

  .subtasks {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    &__label {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.labelColor};
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  .subtask {
    background-color: ${(props) => props.theme.bgSecondary};
    border-radius: 4px;
    padding: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    transition: 0.3s background-color ease-in;

    &:hover {
      cursor: pointer;
      background-color: rgba(99, 95, 199, 0.25);
    }

    &.done {
      .subtask__completed {
        background-color: var(--cta-primary);
      }

      .subtask__completed-icon {
        display: block;
      }

      .subtask__title {
        opacity: 0.5;
      }
    }

    &__completed {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 2px;
      background-color: ${(props) => props.theme.bgPrimary};
      border: 1px solid rgba(130, 143, 163, 0.248914);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__completed-icon {
      display: none;
    }

    &__title {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.textPrimary};
    }
  }

  .status {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    &__label {
      font-weight: 700;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.labelColor};
      text-transform: capitalize;
    }

    &__value {
      padding: 0.8rem 1.6rem;
      font-size: 1.3rem;
      line-height: 2.3rem;
      color: ${(props) => props.theme.textPrimary};
      border-radius: 4px;
      border: 1px solid rgba(130, 143, 163, 0.25);
    }
  }
`;

export default StyledViewTask;
