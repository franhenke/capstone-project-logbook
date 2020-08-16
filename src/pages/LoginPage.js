import React from 'react'
import styled from 'styled-components'
import useServices from '../services/useServices'
import bgImage from '../images/bgl.png'
import LoginForm from '../components/auth/LoginForm/LoginForm'



export default function LoginPage() {
  const { loginWithFirebase, setProfile } = useServices()

  return (
    <BackgroundStyled>
      <FormWrapper>
        <LoginForm
          loginWithFirebase={loginWithFirebase}
          setProfile={setProfile} />
      </FormWrapper>
    </BackgroundStyled>
  )

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


