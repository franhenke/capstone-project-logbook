import React, { useState } from 'react'
import styled from 'styled-components'
import image from '../../images/mockuser.svg'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Profile() {
  const [openMenu, setOpenMenu] = useState(false)
  const menuToggled = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <SideMenuStyled>
        <ToggleMenuButton onClick={menuToggled} />
        {openMenu ? (
          <ToggledMenuStyled>
            <motion.li>
              <LinkStyled to={ROUTES.HOME}>Home</LinkStyled>
              <LinkStyled to={ROUTES.FAVLIST}>Bookmarks</LinkStyled>
            </motion.li>
          </ToggledMenuStyled>
        ) : null}
      </SideMenuStyled>
    </>
  )
}

const SideMenuStyled = styled.div`
  height: 100px;
  width: 100px;
  position: relative;
`

const ToggleMenuButton = styled.button`
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

const ToggledMenuStyled = styled(motion.div)`
  position: absolute;

  background-color: var(--mint);
  padding: 10px;
  height: 80px;
  width: 100px;
`

const LinkStyled = styled(Link)`
  color: black;
  display: block;
`
