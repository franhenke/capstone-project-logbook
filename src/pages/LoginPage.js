import React from 'react'
import useServices from '../services/useServices'
import LoginForm from '../services/auth/LoginForm/LoginForm'

import { FormWrapperTransparent } from '../components/UI/FormWrapperTransparent'
import { BackgroundImage } from '../components/UI/BackgroundImage'
import bgImage from '../components/UI/images/bgl.png'


export default function LoginPage() {
  const { loginWithFirebase, setProfile } = useServices()

  return (
    <BackgroundImage background={bgImage}>
      <FormWrapperTransparent>
        <LoginForm
          loginWithFirebase={loginWithFirebase}
          setProfile={setProfile} />
      </FormWrapperTransparent>
    </BackgroundImage>
  )

}

