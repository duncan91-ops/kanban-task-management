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

  @media screen and (max-width: 1279px) {
    height: 8.1rem;
    padding-right: 2.4rem;

    .header {
      &--right {
        gap: 3rem;
      }
    }

    .btn {
      &__login,
      &__logout,
      &__boards {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    height: 6.4rem;
    padding-right: 1.6rem;

    .logo-box {
      padding: 0 1.6rem;
      border-right: none;
    }

    .logo {
      display: none;

      &.mobile {
        display: block;
      }
    }

    .btn {
      &__login,
      &__logout {
        font-size: 1.6rem;
      }

      &__boards {
        display: none;
      }
    }
  }
`;

export default StyledHeader;
