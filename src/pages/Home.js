import React, { useContext } from 'react'
import styled from 'styled-components'
import LoginContext from '../components/auth/LoginContext'

function Home() {
  const { user } = useContext(LoginContext)
  return (
    <Container>
      {user ? <p>Hello {user.displayName}, nice to see you again!</p> : null}
    </Container>
  )
}

export default Home

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
`
