import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '../components/Button/Button'
import bgImage from '../images/bgl.png'

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

  let history = useHistory()
  return (
    <BackgroundStyled>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Create Account</h2>
          <label>Username</label>
          <InputStyled
            type="name"
            name="name"
            ref={register({ required: true })}
          />
          {errors.email && errors.email.type === 'required' && (
            <Error>Please provide a Username</Error>
          )}
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

          <label>Please repeat your password</label>
          <InputStyled
            name="passwordRepeat"
            type="password"
            ref={register({ required: true, validate: repeatValidation })}
          />

          {errors.passwordRepeat && (
            <Error>{errors.passwordRepeat.message}</Error>
          )}
          <div>
            <Button text="Sign up" type="submit" />
          </div>
          <LinkStyled to="/login">
            Back to <span>login</span>
          </LinkStyled>
        </Form>
      </FormWrapper>
    </BackgroundStyled>
  )

  function onSubmit(data) {
    setProfile(data)
    signUp(data)
    setTimeout(history.push('/home'), 2000)
    alert('You are now registered')

    //     .then((res) => {
    //       if (res.code === 'auth/email-already-in-use') {
    //         return setError('email', 'inUse', 'E-mail address already in use')
    //       }
    //
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

const BackgroundStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const FormWrapper = styled.div`
  justify-items: center;
  height: 570px;
  width: 313px;
  background: RGBA(51, 54, 64, 0.32);
  position: absolute;
  top: 150px;

  h2 {
    font-size: 20px;
    font-weight: medium;
    width: 80px;
    color: white;
    margin-bottom: 40px;
    margin-top: 30px;
  }
`

const Form = styled.form`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  margin: 10px 20px 20px;
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

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 14px;
  height: 16px;
  text-align: center;

  span {
    font-weight: 700;
  }
`

const Error = styled.p`
  color: red;
`
