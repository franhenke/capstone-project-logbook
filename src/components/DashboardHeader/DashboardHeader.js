import React, { useState, useRef, useContext } from 'react'
import * as ROUTES from '../../constants/routes'
import { useHistory } from 'react-router-dom'
import { useOnClickOutside } from '../../services/useOnClickOutside'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'
import SidebarToggler from '../Sidebar/SidebarToggler'
import LoginContext from '../../services/auth/LoginContext'
import WelcomeMessage from '../UI/WelcomeMessage'

export default function DashboardHeader() {
  const { user } = useContext(LoginContext)
  const history = useHistory()
  const node = useRef()
  const [open, setOpen] = useState(false)
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <HeaderStyled>
        {user ? <WelcomeMessage /> : history.push(ROUTES.LOGIN)}
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
