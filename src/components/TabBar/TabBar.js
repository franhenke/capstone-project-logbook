import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HomeIcon from '../../images/Users.svg'
import MarkerIcon from '../../images/Marker.svg'

export default function TabBar() {
  return (
    <TabBarStyled>
      <Link exact to="/">
        <IconStyled src={HomeIcon} alt="home" />
      </Link>
      <Link to="/marker">
        <IconStyled src={MarkerIcon} alt="marker" />
      </Link>
    </TabBarStyled>
  )
}

const TabBarStyled = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-around;
  width: 100vw;
  height: 70px;
  background: whitesmoke;
`

const IconStyled = styled.img`
  height: 30px;
`
// const TabBarStyled = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: var(--summergreen);
// `
