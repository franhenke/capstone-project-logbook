import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as ROUTES from '../../../constants/routes'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import homeIcon from '../images/userblue.svg'
import bookmarkIcon from '../images/bookmarkEmpty.svg'
import plusIcon from '../images/pluswhite.svg'

export default function TabBar() {
  return (
    <>
      <TabBarStyled>
        <NavLinkStyled to={ROUTES.HOME}>
          <AnimatedHomeLinkStyled
            whileTap={{ scale: 0.9 }}
            activeClassName="active"
          />
        </NavLinkStyled>
        <Link to={ROUTES.JOURNALFORM}>
          <AnimatedButtonStyled whileTap={{ scale: 0.9 }} />
        </Link>
        <NavLinkStyled to={ROUTES.FAVLIST}>
          <AnimatedBookmarkLinkStyled
            whileTap={{ scale: 0.9 }}
            activeClassName="active"
            data-testid="favlist"
          />
        </NavLinkStyled>
      </TabBarStyled>
    </>
  )
}

const TabBarStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 1em;
  background: var(--background);
  z-index: 99;
`

const NavLinkStyled = styled(NavLink)`
  &.active {
    border-bottom: 1px solid var(--iconactive);
  }
`

const AnimatedButtonStyled = styled(motion.div)`
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 2.2rem;
  right: 1.5rem;
  background-color: var(--mint);
  box-shadow: 5px 5px 10px #ebefef, -2px -2px 5px #c0cece;
  height: 3.2em;
  width: 3.2em;
  border-radius: 50px;
  border: none;
  z-index: 199;
`

const AnimatedBookmarkLinkStyled = styled(motion.div)`
  background-image: url(${bookmarkIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 1.5em;
  width: 1.5em;
  border: none;
  z-index: 150;
`

const AnimatedHomeLinkStyled = styled(motion.div)`
  background-image: url(${homeIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 1.5em;
  width: 1.5em;
  border: none;
  z-index: 150;
`
