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
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 40px;
  background: var(--background);
  align-self: end;
`
const LinkStyled = styled(Link)`
  height: 40px;
  :active {
    color: var(--iconactive);
  }
`
const IconStyled = styled.img`
  color: var(--primary);
  height: 25px;
`
