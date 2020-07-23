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
          <form onSubmit={handleSubmit}>
            <div>
              <StyledLabel htmlFor="name">Username</StyledLabel>
              <StyledInput
                name="name"
                type="text"
                onChange={handleChange}
                value={values.name || ''}
                required
              />
            </div>
            <div>
              <StyledLabel htmlFor="email">E-Mail</StyledLabel>
              <StyledInput
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email || ''}
                required
              />
            </div>
            <div>
              <StyledLabel htmlFor="password">Password</StyledLabel>
              <StyledInput
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password || ''}
                required
              />
            </div>
            <Button text="Sign up" />
          </form>
        </div>
      )}
      <div className="caption">
        Back to <Link to="/login">Login</Link>.
      </div>
    </>
  )
}

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 10px 0;
  border: 1px solid var(--grey-4);
  border-radius: 3px;
  width: 40%;
`

const StyledLabel = styled.label`
  display: block;
  margin: 0;
`
