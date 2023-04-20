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
  }
`;

export default StyledHeader;
