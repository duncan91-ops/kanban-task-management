import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 9.7rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-bottom: 1px solid ${(props) => props.theme.divider};

  .header {
    &--right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
      padding: 0 3.2rem;
    }
  }

  .logo-box {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 3.2rem;
    padding-left: 2.4rem;
    border-right: 1px solid ${(props) => props.theme.divider};
  }

  .logo {
    &.mobile {
      display: none;
    }
  }

  .title {
    font-size: 2.4rem;
    color: ${(props) => props.theme.textPrimary};
    text-transform: capitalize;
    transition: 0.3s transform ease-in;

    &.open {
      transform: translateX(8.2rem);
    }
  }

  .cta {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    position: relative;

    &__btn {
      &:disabled {
        opacity: 0.25;
        cursor: not-allowed;
      }
    }
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
    &__task {
      font-size: 1.5rem;
      font-weight: 700;
      padding: 1.5rem 2.5rem;
      color: var(--white-primary);
      background-color: var(--cta-primary);
      border-radius: 24px;
      text-transform: capitalize;
      transition: 0.3s background-color ease-in;

      &:hover {
        background-color: var(--cta-primary-light);
      }
    }

    &__edit {
      color: var(--text-primary);
    }

    &__delete {
      color: var(--cta-secondary);
    }
  }
`;

export default StyledHeader;
