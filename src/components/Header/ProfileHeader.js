import React, { useState, useRef, useContext } from 'react'
import * as ROUTES from '../../constants/routes'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useOnClickOutside } from '../../services/useOnClickOutside'
import Sidebar from '../Sidebar/Sidebar'
import SidebarToggler from '../Sidebar/SidebarToggler'
import LoginContext from '../../services/auth/LoginContext'

export default function ProfileHeader() {
  const { user } = useContext(LoginContext)
  const history = useHistory()
  const node = useRef()
  const [open, setOpen] = useState(false)
  useOnClickOutside(node, () => setOpen(false))
  
  return (
    <>
      <HeaderStyled>
      { user ? (
        <WelcomeMessage>Hello {user.displayName}!, let's create memories! </WelcomeMessage> ) 
        : ( history.push(ROUTES.LOGIN) )} 
        <div ref={node}>
          <SidebarToggler open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
        </div>
      </HeaderStyled>

    </>
  )
}

const HeaderStyled = styled.header`
  grid-row: 1 / 2;
  width: 100vw;
  position: relative;
`

const WelcomeMessage = styled.p`
font-size: 14px;
color: var(--text);
position: absolute;
top: 80px;
left: 75px;
`