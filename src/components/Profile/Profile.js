import React from 'react'
import styled from 'styled-components'
import image from '../../images/profile.jpg'

export default function Profile() {
  return (
    <>
      <ProfileImage></ProfileImage>
    </>
  )
}

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
