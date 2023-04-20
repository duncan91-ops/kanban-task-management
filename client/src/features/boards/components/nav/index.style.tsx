import styled from "styled-components";

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: -30rem;
  min-height: 100vh;
  height: 100%;
  width: 30rem;
  background-color: ${(props) => props.theme.bgPrimary};
  display: flex;
  flex-direction: column;
  z-index: 10;
  transition: 0.3s transform ease-in;
  border-right: 1px solid ${(props) => props.theme.divider};

  &.open {
    transform: translateX(30rem);
  }

  .logo-box {
    height: 9.7rem;
    padding: 3.2rem 0 0 3.4rem;
  }

  .logo {
    &.mobile {
      display: none;
    }
  }

  .content {
    flex-grow: 1;
    padding: 1.5rem 2.4rem 3.2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .boards {
    &__title {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.2rem;
      margin: 0 0 1.9rem 3.2rem;
      color: var(--text-primary);
      letter-spacing: 2.4px;
    }

    &__list {
      list-style-type: none;
      display: flex;
      flex-direction: column;
    }

    &__item {
      height: 4.8rem;
      border-radius: 0 100px 100px 0;
      overflow: hidden;
    }

    &__link {
      padding-left: 3.2rem;
      display: flex;
      align-items: center;
      gap: 1.6rem;
      width: 100%;
      height: 100%;
      transition: 0.3s background-color ease-in;
      color: var(--text-primary);

      &:hover {
        background-color: ${(props) => props.theme.hoverPrimary};
        color: var(--cta-primary);

        path {
          fill: var(--cta-primary);
        }
      }

      &--text {
        font-size: 1.5rem;
        font-weight: 700;
        transition: 0.3s color ease-in;
      }
    }
  }

  .btn {
    &__board {
      text-transform: capitalize;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--cta-primary);
      height: 4.8rem;
      display: flex;
      align-items: center;
      gap: 1.6rem;
      padding-left: 3.2rem;
      transition: 0.3s color ease-in;

      &--icon {
        path {
          fill: var(--cta-primary);
          transition: 0.3s fill ease-in;
        }
      }

      &:hover {
        color: var(--cta-primary-light);

        path {
          fill: var(--cta-primary-light);
        }
      }
    }
  }

  .cta {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .switch {
    margin-left: 2.4rem;
    height: 4.8rem;
    background-color: ${(props) => props.theme.bgSecondary};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    border-radius: 6px;

    &__input {
      display: none;
    }

    &__input:checked + .switch__slider::after {
      transform: translateX(20px);
    }

    &__slider {
      display: inline-block;
      width: 4rem;
      height: 2rem;
      border-radius: 12px;
      position: relative;
      background-color: var(--cta-primary);
      transition: 0.3s background-color ease-in;

      &:hover {
        cursor: pointer;
        background-color: var(--cta-primary-light);
      }

      &::after {
        content: "";
        display: inline-block;
        width: 1.4rem;
        height: 1.4rem;
        position: absolute;
        top: 0.3rem;
        left: 0.3rem;
        border-radius: 50%;
        background-color: #fff;
        transition: 0.2s transform ease-in-out;
      }
    }
  }

  .hide-sidebar {
    height: 4.8rem;
    border-radius: 0 100px 100px 0;
    overflow: hidden;

    &__btn {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 1.6rem;
      padding-left: 3.2rem;
      color: var(--text-primary);
      transition: 0.3s background-color ease-in;

      &:hover {
        background-color: ${(props) => props.theme.hoverPrimary};
        color: var(--cta-primary);

        path {
          fill: var(--cta-primary);
        }
      }

      &--text {
        font-weight: 700;
        font-size: 1.5rem;
        text-transform: capitalize;
      }
    }
  }
`;

export default StyledNav;
