import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 9.7rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-bottom: 1px solid ${(props) => props.theme.divider};
  position: relative;

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
    z-index: 10;

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
    &__boards {
      display: none;
    }

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

    &__task-icon {
      display: none;
    }

    &__edit {
      color: var(--text-primary);
    }

    &__delete {
      color: var(--cta-secondary);
    }
  }

  .section-boards {
    display: none;
  }

  @media screen and (max-width: 1279px) {
    height: 8.1rem;

    .header {
      &--right {
        padding: 0 2.4rem;
      }
    }

    .logo-box {
      padding: 0 2.4rem;
    }

    .title {
      font-size: 2rem;

      &.open {
        transform: translateX(6rem);
      }
    }
  }

  @media screen and (max-width: 767px) {
    height: 6.4rem;

    .header {
      &--right {
        padding: 0 1.6rem 0 0;
      }
    }

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

    .title {
      display: none;
    }

    .cta {
      gap: 1.6rem;
    }

    .btn {
      &__boards {
        display: flex;
        gap: 0.8rem;
        align-items: center;
      }

      &__boards-title {
        font-size: 1.8rem;
        color: ${(props) => props.theme.textPrimary};
        text-transform: capitalize;
      }

      &__task {
        padding: 1rem 1.8rem;
      }

      &__task-text {
        display: none;
      }

      &__task-icon {
        display: block;
      }

      &__board {
        text-transform: capitalize;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--cta-primary);
        height: 4.8rem;
        display: flex;
        align-items: center;
        gap: 1.2rem;
        padding-left: 2.4rem;
        transition: 0.3s color ease-in;
        margin-bottom: 1.6rem;

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

    .section-boards {
      display: block;
      position: absolute;
      top: 6.4rem;
      left: 0;
      width: 100%;
      min-height: calc(100vh - 6.4rem);
      background-color: rgba(0, 0, 0, 0.5);
      padding: 1.6rem 0 0 5.4rem;
      z-index: 10;
    }

    .boards {
      width: 26.4rem;
      padding: 1.6rem 1.3rem 1.6rem 0;
      background-color: ${(props) => props.theme.bgPrimary};
      border-radius: 8px;
      box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);

      &__title {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        margin: 0 0 1.9rem 2.4rem;
        color: var(--text-primary);
        letter-spacing: 2.4px;
      }

      &__list {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        padding-right: 1.1rem;
      }

      &__item {
        height: 4.8rem;
        border-radius: 0 100px 100px 0;
        overflow: hidden;
      }

      &__link {
        padding-left: 2.4rem;
        display: flex;
        align-items: center;
        gap: 1.2rem;
        width: 100%;
        height: 100%;
        transition: 0.3s background-color ease-in;
        color: var(--text-primary);

        &.active {
          background-color: var(--cta-primary);
          color: #fff;
          transition: 0.3s background-color ease-in;

          &:hover {
            background-color: var(--cta-primary-light);
            color: #fff;

            path {
              fill: #fff;
            }
          }

          path {
            fill: #fff;
          }
        }

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

    .switch {
      margin-left: 1.6rem;
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
  }
`;

export default StyledHeader;
