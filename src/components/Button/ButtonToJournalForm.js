import React from 'react'
import * as ROUTES from '../../constants/routes'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import plusIcon from '../UI/images/pluswhite.svg'

export default function ButtonToJournalForm() {
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
  bottom: 55px;
  right: 30px;
  background-color: var(--mint);
  box-shadow:  5px 5px 10px #EBEFEF, 
             -2px -2px 5px #C0CECE;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: none;
  z-index: 199;
`
