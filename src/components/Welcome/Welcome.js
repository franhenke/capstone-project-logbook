import React, { useContext } from 'react'
import styled from 'styled-components'
import LoginContext from '../auth/LoginContext'

export default function Welcome() {
  const { user } = useContext(LoginContext)
  return (
    <WelcomeStyled>
      {user ? <div>Welcome back, {user.displayName}! </div> : null}
    </WelcomeStyled>
  )
}

const WelcomeStyled = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
  text-align: left;
  font-size: 14px;
  font-weight: light;
`
