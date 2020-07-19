import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HomeIcon from '../../images/Users.svg'
import MarkerIcon from '../../images/Marker.svg'
import PencilIcon from '../../images/pencil_fill.svg'

export default function TabBar() {
  return (
    <TabBarStyled>
      <Link to="/">
        <IconStyled src={HomeIcon} alt="home" />
      </Link>
      <Link to="/journalform">
        <IconStyled src={PencilIcon} alt="marker" />
      </Link>
      {/* <Link to="/marker">
        <IconStyled src={MarkerIcon} alt="marker" />
      </Link> */}
    </TabBarStyled>
  )
}

const TabBarStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 50px;
  background: var(--background);

  align-self: end;
`

const IconStyled = styled.img`
  color: var(--priamry);
  height: 25px;
`

/* // const TabBarStyled = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: var(--summergreen);
//  */
