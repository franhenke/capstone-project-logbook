import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useOnClickOutside } from '../../services/useOnClickOutside'
import Sidebar from '../Sidebar/Sidebar'
import SidebarToggler from '../Sidebar/SidebarToggler'

export default function ProfileHeader() {
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  const [open, setOpen] = useState(false)
  return (
    <>
      <HeaderStyled>
        <WelcomeMessage>Hello Sarah,
      let's create memories! </WelcomeMessage>
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