import styled, {keyframes} from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  border: 1.6rem solid ${props => props.theme.textPrimary};
  border-top: 1.6rem solid var(--cta-primary);
  animation: ${spin} 1s linear infinite;
`

export default StyledLoading;