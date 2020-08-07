import React from 'react'
import * as ROUTES from '../../constants/routes'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import sendIcon from '../../images/sendIcon.svg'

export default function ButtonSend() {
  return (
    <Link to={ROUTES.JOURNALFORM}>
      <AnimatedButtonStyled whileTap={{ scale: 0.9 }} />
    </Link>
  )
}

const AnimatedButtonStyled = styled(motion.div)`
  background-image: url(${sendIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50px;
  right: 25px;
  background-color: var(--mint);
  height: 45px;
  width: 45px;
  border-radius: 50px;
  border: none;
`
