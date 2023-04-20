import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9.7rem;
  padding-right: 3.2rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-bottom: 1px solid ${(props) => props.theme.divider};

  .header {
    &--right {
      display: flex;
      gap: 4rem;
      align-items: center;
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

  .btn {
    &__login,
    &__logout {
      font-size: 2rem;
      background-color: var(--cta-secondary);
      color: var(--white-primary);
      padding: 1rem 2rem;
      border-radius: 50px;
      transition: 0.3s background-color ease-in;

      &:hover {
        background-color: var(--cta-secondary-light);
      }
    }

    &__boards {
      font-size: 2rem;
      color: var(--cta-primary);
      transition: 0.3s color ease-in;

      &:hover {
        color: var(--cta-primary-light);
      }
    }

    &__avatar {
      width: 4rem;
      height: 4rem;
    }
  }

  .avatar {
    width: 100%;
    height: auto;
    border-radius: 100px;
  }
`;

export default StyledHeader;
