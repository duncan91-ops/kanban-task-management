import StyledRegister from "./index.style"
import { RegisterForm } from "~/features/auth"

const Register = () => {
  return (
    <StyledRegister>
      <div className="form-container">
        <h2 className="form-title">sign up</h2>
        <RegisterForm />
      </div>
    </StyledRegister>
  )
}

export default Register