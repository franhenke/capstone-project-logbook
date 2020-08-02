import React from 'react'
import styled from 'styled-components'
import image from '../../images/mockuser.svg'

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
  overflow: visible;
  top: 20px;
  left: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 45px;
  width: 45px;
  border-radius: 50%;
`
