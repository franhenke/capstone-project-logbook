import React from 'react'
import styled from 'styled-components'
import LoginContext from '../../services/auth/LoginContext'

export default function WelcomeMessage() {
  const { user } = useContext(LoginContext)

  return (
    <WelcomeMessageStyled>
      Hello {user.displayName}, let's create memories!{' '}
    </WelcomeMessageStyled>
  )
}
const WelcomeMessage = styled.h2`
  font-size: 1em;
  color: var(--text);
  position: absolute;
  top: 6em;
  left: 4em;
`
