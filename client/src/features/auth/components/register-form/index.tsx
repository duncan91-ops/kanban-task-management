import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import StyledRegisterForm from "./index.style"
import { reset, register as authRegister } from "../../authSlice"
import { RootState, useAppDispatch } from "~/setup/app/store"
import { Loading } from "~/common/components"

export type RegisterFormData = {
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  re_password: String,
}

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormData>()
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


  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    dispatch(authRegister(data))
  }

  if (isLoading) return <Loading />

  return (
    <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
      <div className="formInputContainer">
        <label htmlFor="firstName" className="label firstName">first name</label>
        <input
          type="text"
          className={`formInput firstName ${errors.email && 'error'}`}
          id="firstName"
          {...register('first_name', {required: true, maxLength: 50})}
        />
        {errors.first_name?.type === 'required' && <span className="error-msg">first name is required</span> 
        || errors.first_name?.type === 'maxLength' && <span className="error-msg">first name is too long</span>}
      </div>
      <div className="formInputContainer">
        <label htmlFor="lastName" className="label lastName">last name</label>
        <input
          type="text"
          className={`formInput lastName ${errors.email && 'error'}`}
          id="lastName"
          {...register('last_name', {required: true, maxLength: 50})}
        />
        {errors.last_name?.type === 'required' && <span className="error-msg">last name is required</span> 
        || errors.last_name?.type === 'maxLength' && <span className="error-msg">last name is too long</span>}
      </div>
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
          className={`formInput password ${errors.email && 'error'}`}
          id="password"
          {...register('password', {required: true, minLength: 8})}
        />
        {errors.password?.type === 'required' && <span className="error-msg">password is required</span> 
        || errors.password?.type === 'minLength' && <span className="error-msg">password must be longer than 8 characters</span>}
      </div>
      <div className="formInputContainer">
        <label htmlFor="re_password" className="label re_password">retype password</label>
        <input
          type="password"
          className={`formInput password re_password ${errors.email && 'error'}`}
          id="re_password"
          {...register('re_password', {required: true, minLength: 8})}
        />
        {errors.re_password?.type === 'required' && <span className="error-msg">password is required</span> 
        || errors.re_password?.type === 'minLength' && <span className="error-msg">password must be longer than 8 characters</span>}
      </div>
      {errorMessage && <span className="error-msg">{errorMessage}</span>}
      <button className="btn btn__submit" type="submit">sign up</button>
      <p className="small">
        Already have an account? <Link to="/login" className="login">sign in</Link>
      </p>
    </StyledRegisterForm>
  )
}

export default RegisterForm