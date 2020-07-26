import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '../components/Button/Button'
import LoginContext from '../components/auth/LoginContext'

LoginContext.propTypes = {
  profile: PropTypes.object.isRequired,
  loginWithFirebase: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired
}

export default function Login({ loginWithFirebase, profile, setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <InputStyled
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
