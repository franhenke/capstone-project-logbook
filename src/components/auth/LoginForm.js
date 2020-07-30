import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Button from '../Button/Button'
import LoginContext from './LoginContext'

LoginContext.propTypes = {
  profile: PropTypes.object.isRequired,
  loginWithFirebase: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default function LoginForm({ loginWithFirebase, setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <label>Email</label>
      <InputStyled type="email" name="email" ref={register} required />
      {errors.email && errors.email.type === 'notFound' && (
        <Error>{errors.email.message}</Error>
      )}

      <label>Password</label>
      <InputStyled type="password" name="password" ref={register} />
      {errors.password && <Error>'Please check your input'</Error>}
      <div>
        <Button text="Sign up" type="submit" />
      </div>
    </Form>
  )

  function onSubmit(data) {
    setProfile(data)
    loginWithFirebase(data)
  }
}

const Form = styled.form`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  margin: 10px 20px 20px;

  h2 {
    font-size: 20px;
    font-weight: medium;
    width: 80px;
    color: white;
    margin-bottom: 40px;
    margin-top: 30px;
  }

  label {
    color: white;
    font-size: 16px;
    letter-spacing: 2px;
    height: 16px;
    margin: 25px 0 20px;
  }

  div {
    margin-top: 20px;
  }
`
const InputStyled = styled.input`
  background: none;
  color: white;
  outline: none;
  border: none;
  padding-bottom: 5px;
  border-bottom-style: solid;
  border-bottom-color: #979797;
  border-bottom-width: 1px;
  font-size: 16px;

  width: 273px;

  &:focus {
    border: none;
    border-bottom-style: solid;
    border-bottom-color: var(--highlight);
    border-bottom-width: 1px;
  }
`

const Error = styled.p`
  color: red;
`
