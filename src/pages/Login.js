import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '../components/Button/Button'
import LoginContext from '../components/auth/LoginContext'

LoginContext.propTypes = {
  profile: PropTypes.object.isRequired,
  loginWithFirebase: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired
}

export default function Login({ loginWithFirebase, setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()

  let history = useHistory()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <InputStyledGet
        type="email"
        name="email"
        ref={register}
        required
      />
      {errors.email && errors.email.type === 'notFound' && (
        <Error>{errors.email.message}</Error>
      )}

      <label>Password</label>
      <InputStyled
        type="password"
        name="password"
        ref={register}
      />
      {errors.password && (
        <Error>'Please check your input'</Error>
      )}
      <div>
        <Button text="Sign up" type="submit" />
      </div>
      <LinkStyled to="/login">
        Not a user yet? <span>Sign up</span>
      </LinkStyled >
    </form>
  )


  function onSubmit(data) {
    setProfile(data)
    loginWithFirebase(data)
    setTimeout(history.push('/home'), 2000)
    // .then((res) => {
    //   if (res.code === 'auth/user-not-found') {
    //     return setError(
    //       'email',
    //       'notFound',
    //       'The email or password you entered are incorrect. Please try again',
    //     )
    //   }
    //   if (res.code === 'auth/wrong-password') {
    //     return setError(
    //       'password',
    //       'The email or password you entered are incorrect. Please try again'
    //     )
    //   }
    // })
  }
}

const InputStyled = styled.input` 
  background: var(--background);
  color: var(--text);
  outline: none;
  border: none;
  border-bottom-style: solid;
  border-bottom-color: #979797;
  border-bottom-width: 1px;
  font-size: 16px;
  opacity: 0.5;
  width: 285px;

  &:focus {
      border: none;
      border-bottom-style: solid;
      border-bottom-color: var(--highlight);
      border-bottom-width: 1px;
    }
  `

const LinkStyled = styled(Link)`
text-decoration: none;
color: #21374f;
    font-size: 14px;
    height: 16px;
    opacity: 0.5;
    margin: 25px 0 10px;
    text-align: center;

    span {
      font-weight: 700;
    }
`

const Error = styled.p`
color: red;
`
