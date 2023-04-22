import styled from "styled-components";

const StyledColumn = styled.article`
  width: 28rem;

  .title {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 2.4rem;

    &__spot {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: var(--cta-primary);
    }

    &__text {
      font-weight: 700;
      font-size: 1.2rem;
      text-transform: uppercase;
      color: var(--text-primary);
      letter-spacing: 2.4px;
    }
  }

  .tasks {
    display: grid;
    grid-template-columns: 1;
    grid-auto-flow: row;
    grid-row-gap: 2rem;
  }

  .task {
    padding: 2.3rem 1.6rem;
    background-color: ${(props) => props.theme.bgPrimary};
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);

    &:hover {
      cursor: pointer;
    }

    &:hover .task__title {
      color: var(--cta-primary);
    }

    &__title {
      color: ${(props) => props.theme.textPrimary};
      font-size: 1.5rem;
      font-weight: 700;
      transition: 0.3s color ease-in;
    }

    &__stats {
      color: var(--text-primary);
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
`;

export default StyledColumn;
