import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import homeIcon from '../../images/userblue.svg'
import bookmarkIcon from '../../images/bookmarkEmpty.svg'




export default function TabBar() {
  return (
    <TabBarStyled>
      <LinkStyled to={ROUTES.HOME}>
        <AnimatedHomeLinkStyled
          whileTap={{ scale: 0.9 }}
          activeClassName="selected"
        />
      </LinkStyled>
      <LinkStyled to={ROUTES.FAVLIST}>
        <AnimatedBookmarkLinkStyled
          whileTap={{ scale: 0.9 }}
          activeClassName="selected"
          data-testid="favlist"
        />
      </LinkStyled>
    </TabBarStyled>
  )
}

const TabBarStyled = styled.div`
  grid-row: 3 / 4;
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background: var(--background);
`
const LinkStyled = styled(Link)`
  :active {
    color: var(--iconactive);
  }
`

const AnimatedBookmarkLinkStyled = styled(motion.div)`
  background-image: url(${bookmarkIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 20px;
  width: 20px;
  border: none;
  z-index: 99;
`

const AnimatedHomeLinkStyled = styled(motion.div)`
  background-image: url(${homeIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 20px;
  width: 20px;
  border: none;
  z-index: 99;
`
