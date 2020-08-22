import React from 'react'
import RegisterForm from '../services/auth/RegisterForm/RegisterForm'
import useServices from '../services/useServices'

import { FormWrapperTranparent } from '../components/UI/FormWrapperTranparent'
import { BackgroundImage } from '../components/UI/BackgroundImage'
import bgImage from '../components/UI/images/bgl.png'

export default function RegisterPage() {
  const { signUp, setProfile } = useServices()

  return (
    <BackgroundImage background={bgImage}>
      <FormWrapperTranparent >
        <RegisterForm signUp={signUp} setProfile={setProfile} />
      </FormWrapperTranparent>
    </BackgroundImage>
  )
}


