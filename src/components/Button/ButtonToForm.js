import React from 'react'
import * as ROUTES from '../../constants/routes'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import plusIcon from '../../images/pluswhite.svg'

export default function ButtonToForm() {
  return (
    <Link to={ROUTES.JOURNALFORM}>
      <AnimatedButtonStyled whileTap={{ scale: 0.9 }} />
    </Link>
  )
}

const AnimatedButtonStyled = styled(motion.div)`
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 60px;
  right: 30px;
  background-color: var(--mint);
  height: 40px;
  width: 40px;
  border-radius: 50px;
  border: none;
`
