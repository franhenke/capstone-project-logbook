import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '../components/Button/Button'

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default function SignUp({ setProfile, signUp }) {
  const {
    register,
    handleSubmit,
    errors,
    triggerValidation,
    getValues,
    formState,
  } = useForm()

  const repeatValidation = (passwordRepeat) =>
    passwordRepeat === getValues().password || 'Passwords do not match'

  const validateRepeat = () => {
    if (formState.isSubmitted) {
      triggerValidation({ name: 'passwordRepeat' })
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <InputStyled
        type="name"
        name="name"
        ref={register({ required: true })}
      />
      {((errors.email && errors.email.type === 'required') && <Error>Please provide a Username</Error>)}
      <label>Email</label>
      <InputStyled
        type="email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {((errors.email && errors.email.type === 'required') ||
        (errors.email && errors.email.type === 'pattern')) && (
          <Error>Please check your entered e-mail address</Error>
        )}


      <label>Password</label>
      <InputStyled
        ref={register({
          required: true,
          minLength: {
            value: 6,
            message: 'Password must have at least 6 characters',
          },
        })}
        onChange={validateRepeat}
        type="password"
        name="password"
      />

      {errors.password && (
        <Error>'Password must have at least 6 characters'</Error>
      )}

      <label>
        Please repeat your password</label>
      <InputStyled
        name="passwordRepeat"
        type="password"
        ref={register({ required: true, validate: repeatValidation })}
      />

      {errors.passwordRepeat && <Error>{errors.passwordRepeat.message}</Error>}
      <div>
        <Button text="Sign up" type="submit" />
      </div>
      <LinkStyled to="/login">
        Back to <span>login</span>
      </LinkStyled >
    </Form >
  )

  function onSubmit(values) {
    setProfile(values)
    signUp(values)
    //     .then((res) => {
    //       if (res.code === 'auth/email-already-in-use') {
    //         return setError('email', 'inUse', 'E-mail address already in use')
    //       }
    //       setTimeout(history.push('/'), 2000)
    //       alert('You are now registered')
    //     })
    //     .catch((error) => {
    //       console.log(
    //         'Sorry, there was an error with the server. Please try again later.',
    //         error
    //       )
    //     })
    // }
  }
}

const Form = styled.form`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  margin: 10px 20px 20px;
  label {
    color: #21374f;
    font-size: 16px;
    letter-spacing: 2px;
    height: 16px;
    opacity: 0.5;
    margin: 25px 0 20px;
  }

  div {
    margin-top: 20px;
  }

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

