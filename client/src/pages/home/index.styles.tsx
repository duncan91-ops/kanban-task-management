import styled from "styled-components";

const StyledHome = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgSecondary};
  position: relative;
  padding: 4rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7rem;

    &--right {
      display: flex;
      gap: 4rem;
      align-items: center;
    }
  }

  .logo {
    &.mobile {
      display: none;
    }
  }

  .btn {
    &__login {
      font-size: 2.4rem;
      color: var(--cta-secondary);
      transition: .2s color ease-in;

      &:hover {
        color: var(--cta-secondary-light);
      }
    }
  }
`

export default StyledHome;