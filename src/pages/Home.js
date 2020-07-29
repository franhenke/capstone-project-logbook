import React, { useContext } from 'react'
import styled from 'styled-components'
import LoginContext from '../components/auth/LoginContext'
import image from '../images/profile.jpg'
import UserBar from '../components/auth/UserBar'

function Home() {
  const { user } = useContext(LoginContext)
  return (
    <>
      <ProfileImage></ProfileImage>
      <UserBar />
      <Container>
        {user ? <h3>Welcome back, {user.displayName}! </h3> : null}
        {user ? <p>Let's create memories</p> : null}
      </Container>
    </>
  )
}

export default Home

const ProfileImage = styled.div`
  background-image: url(${image});
  position: absolute;
  top: 20px;
  left: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  text-align: left;

  h3 {
    text-align: left;
  }
`
