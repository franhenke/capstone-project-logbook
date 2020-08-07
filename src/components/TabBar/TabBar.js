import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import styled from 'styled-components'
import homeIcon from '../../images/list.svg'
import pencil from '../../images/book-open.svg'

export default function TabBar() {

  return (
    <TabBarStyled>
      <LinkStyled to={ROUTES.HOME}>
        <IconStyled src={homeIcon} />
      </LinkStyled>
      <LinkStyled to={ROUTES.JOURNALFORM}>
        <IconStyled src={pencil} />
      </LinkStyled>
    </TabBarStyled>
  )
}

const TabBarStyled = styled.div`
/* grid-row: 3 / 4;
  position: relative; */
  display: flex;
  justify-content: space-around;
  /* width: 100vw; */
  background: var(--background);
  
`
const LinkStyled = styled(Link)`
    z-index: 99;

  :active {
    color: var(--iconactive);
  }
`
const IconStyled = styled.img`
  color: var(--primary);
  height: 25px;
  pointer-events: none;
`
