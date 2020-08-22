import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import homeIcon from '../UI/images/userblue.svg'
import bookmarkIcon from '../UI/images/bookmarkEmpty.svg'




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
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 70%;
  background: var(--background);
   z-index: 99;
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
  height: 1.3em;
  width: 1.3em;
  border: none;
  z-index: 200;
`

const AnimatedHomeLinkStyled = styled(motion.div)`
  background-image: url(${homeIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 1.5em;
  width: 1.5em;
  border: none;
  z-index: 200;
`
