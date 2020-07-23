import React, { useState } from 'react'
import * as ROUTES from '../../routes'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import firebaseApp from '../../firebase'
import useForm from '../../hooks/useForm'
import Button from '../Button/Button'

export default function SignUp() {
  let history = useHistory()
  const [isRegistered, setIsRegistered] = useState(false)
  const [values, handleChange, handleSubmit] = useForm(registerToFirebase)

  const redirectTo = (path) => history.push(path)
  const resetForm = () => setIsRegistered('')

  async function registerToFirebase(values) {
    try {
      const newUser = await firebaseApp.createUserWithEmailAndPassword(
        values.email,
        values.password
      )
      await newUser.user.updateProfile({
        displayName: values.name,
      })
      redirectTo(ROUTES.HOME)
      resetForm()
    } catch (error) {
      setIsRegistered({ ...isRegistered, error })
    }
  }

  return (
    <>
      {isRegistered ? (
        <p>
          Let's create memories! <Link to="/home">Home</Link>
        </p>
      ) : (
        <div>
          <h2>Sign up</h2>
          <RegisterFormStyled onSubmit={handleSubmit}>
            <div>
              <LabelStyled htmlFor="name">Username</LabelStyled>
              <InputStyled
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name || ''}
                required
              />
            </div>
            <div>
              <LabelStyled htmlFor="email">E-Mail</LabelStyled>
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
            <Button text="Sign up" />
          </RegisterFormStyled>
        </div>
      )}
      <div className="caption">
        Back to <Link to="/login">Login</Link>.
      </div>
    </>
  )
}

const RegisterFormStyled = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 520px;
  width: 285px;
  font-family: Roboto;
  margin-bottom: 40px;
`
const LabelStyled = styled.label`
  color: #21374f;
  font-size: 16px;
  letter-spacing: 2px;
  height: 16px;
  opacity: 0.5;
  margin: 25px 0 10px;
`

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
