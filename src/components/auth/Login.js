import React from 'react'
import { useRouteMatch, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import firebaseApp from '../../firebase'
import useForm from '../../hooks/useForm'
import Button from '../Button/Button'

export default function LoginForm() {
  const [values, handleChange, handleSubmit] = useForm(loginWithFirebase)
  const history = useHistory()
  let { url } = useRouteMatch()

  async function loginWithFirebase(values) {
    await firebaseApp.signInWithEmailAndPassword(values.email, values.password)
    return history.push('/home')
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <LabelStyled htmlFor="email">Email</LabelStyled>
          <InputStyled
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email || ''}
            required
          />
        </div>
        <div>
          <LabelStyled htmlFor="password">Password</LabelStyled>
          <InputStyled
            name="password"
            type="password"
            onChange={handleChange}
            value={values.password || ''}
            required
          />
        </div>
        <Button text="Sign in" />
      </form>
      <div className="caption">
        Not a user yet? <Link to={`${url}/register`}>Sign up</Link>.
      </div>
    </>
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

const LabelStyled = styled.label`
  color: #21374f;
  font-size: 16px;
  letter-spacing: 2px;
  height: 16px;
  opacity: 0.5;
  margin: 25px 0 10px;
`
