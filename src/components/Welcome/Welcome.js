import React, { useContext } from 'react'
import styled from 'styled-components'
import LoginContext from '../auth/LoginContext'

export default function Welcome() {
  const { user } = useContext(LoginContext)
  return (
    <Container>
      {user ? <h3>Welcome back, {user.displayName}! </h3> : null}
    </Container>
  )
}

const Container = styled.div`
  h3 {
    text-align: left;
  }
`
