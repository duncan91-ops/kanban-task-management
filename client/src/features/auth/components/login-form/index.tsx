import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { useSelector } from "react-redux"
import { reset, login } from "../../authSlice"
import { RootState, useAppDispatch } from "~/setup/app/store"
import StyledLoginForm from "./index.style"
import { Loading } from "~/common/components"

export type LoginFormData = {
  email: String,
  password: String,
}

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<LoginFormData>()
  const {isError, isLoading, isSuccess, user, message} = useSelector((state:RootState) => state.auth)

  useEffect(() => {
    if (isError) {
      setErrorMessage(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    dispatch(login(data))
  }

  if (isLoading) return <Loading />

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="formInputContainer">
        <label htmlFor="email" className="label email">email</label>
        <input
          type="email"
          className={`formInput email ${errors.email && 'error'}`}
          id="email"
          {...register('email', {required: true})}
        />
        {errors.email && <span className="error-msg">email address is required</span>}
      </div>
      <div className="formInputContainer">
        <label htmlFor="password" className="label password">password</label>
        <input
          type="password"
          className={`formInput password ${errors.password && 'error'}`}
          id="password"
          {...register('password', {required: true, minLength: 8})}
        />
        {errors.password?.type === 'required' && <span className="error-msg">password is required</span> 
        || errors.password?.type === 'minLength' && <span className="error-msg">password must be longer than 8 characters</span>}
      </div>
      {errorMessage && <span className="error-msg">{errorMessage}</span>}
      <button className="btn btn__submit" type="submit">sign in</button>
      <p className="small">
        Already have an account? <Link to="/register" className="login">sign up</Link>
      </p>
    </StyledLoginForm>
  )
}

export default LoginForm