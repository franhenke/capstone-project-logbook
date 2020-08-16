import React from 'react'
import * as ROUTES from '../constants/routes'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '../components/Button/Button'
import LoginContext from '../components/auth/LoginContext'
import bgImage from '../images/bgl.png'

LoginContext.propTypes = {
  profile: PropTypes.object.isRequired,
  loginWithFirebase: PropTypes.func.isRequired,
  setProfile: PropTypes.func.isRequired,
}

export default function LoginPage({ loginWithFirebase, setProfile }) {
  const { register, handleSubmit, errors, setError } = useForm()

  return (
    <BackgroundStyled>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <label>Email</label>
          <InputStyled
            type="email"
            name="email"
            ref={register}
            required
            data-testid="email"
          />
          {errors.email && errors.email.type === 'notFound' && (
            <Error>{errors.email.message}</Error>
          )}

          <label>Password</label>
          <InputStyled
            type="password"
            name="password"
            ref={register} />
          {errors.password && <Error>'Please check your input'</Error>}
          <div>
            <Button text="Sign up" type="submit" />
          </div>
          <LinkStyled to={ROUTES.REGISTER}>
            Not a user yet? <span>Sign up</span>
          </LinkStyled>
        </Form>
      </FormWrapper>
    </BackgroundStyled>
  )

  function onSubmit(data) {
    setProfile(data)
    loginWithFirebase(data)

  }
}

const BackgroundStyled = styled.image`
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
  top: 50px;

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

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 14px;
  height: 16px;

  margin: 25px 0 10px;
  text-align: center;

  span {
    font-weight: 700;
  }
`

const Error = styled.p`
  color: red;
`
