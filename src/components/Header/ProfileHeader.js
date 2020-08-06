import React from 'react'
import styled from 'styled-components'
import Profile from '../Profile/Profile'
import Welcome from '../Welcome/Welcome'
import UserBar from '../auth/UserBar'

export default function ProfileHeader() {
  return (
    <>
      <HeaderStyled>
        <Profile />
        {/* <Welcome /> */}
        {/* <UserBar /> */}
      </HeaderStyled>
    </>
  )
}

const HeaderStyled = styled.header`
  grid-row: 1 / 2;
  width: 100vw;
  position: relative;
`
