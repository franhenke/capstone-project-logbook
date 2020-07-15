import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HomeIcon from '../../images/Users.svg'
import MarkerIcon from '../../images/Marker.svg'
import WriteIcon from '../../images/write.svg'

export default function TabBar() {
  return (
    <TabBarStyled>
      <Link exact to="/">
        <IconStyled src={HomeIcon} alt="home" />
      </Link>
      <Link to="/journalform">
        <WriteIconStyled src={WriteIcon} alt="marker" />
      </Link>
      <Link to="/marker">
        <IconStyled src={MarkerIcon} alt="marker" />
      </Link>
    </TabBarStyled>
  )
}

const TabBarStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background: whitesmoke;
  position: relative;
`

const IconStyled = styled.img`
  height: 30px;
`

const WriteIconStyled = styled.img`
  position: absolute;
  bottom: 30px;
  right: 166px;
`

/* // const TabBarStyled = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: var(--summergreen);
//  */
