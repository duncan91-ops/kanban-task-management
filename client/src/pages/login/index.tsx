import StyledLogin from "./index.style"
import { LoginForm } from "~/features/auth"

const Login = () => {
  return (
    <StyledLogin>
      <div className="form-container">
        <h2 className="form-title">sign in</h2>
        <LoginForm />
      </div>
    </StyledLogin>
  )
}

export default Login