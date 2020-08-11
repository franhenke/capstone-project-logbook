import React from 'react'
import styled from 'styled-components'
import image from '../../images/mockuser.svg'

const ProfilePic = () => {
  return (
    <>
      <ProfilePicStyled />
    </>
  )
}

export default ProfilePic

const ProfilePicStyled = styled.div`
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 50px;
`
