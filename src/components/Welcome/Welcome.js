import React, { useContext } from 'react'
import styled from 'styled-components'
import LoginContext from '../auth/LoginContext'

export default function Welcome() {
  const { user } = useContext(LoginContext)
  return (
    <WelcomeStyled>
      {user ? <h3>Welcome back, {user.displayName}! </h3> : null}
    </WelcomeStyled>
  )
}

const WelcomeStyled = styled.h2`
  position: absolute;
  top: 75px;
  left: 20px;
  text-align: left;
  font-size: 14px;
  font-weight: light;
`
