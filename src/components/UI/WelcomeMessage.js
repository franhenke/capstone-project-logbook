import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import LoginContext from '../../services/auth/LoginContext'

export default function WelcomeMessage() {
  const { user } = useContext(LoginContext)
  const [hour, setHour] = useState(new Date().toLocaleTimeString())

  let greeting
  if (hour < 12) {
    greeting = `Good Morning, ${user.displayName}`
  }
  if (hour > 12 && hour < 16) {
    greeting = `Good Afternoon, ${user.displayName}`
  } else {
    greeting = `Good Evening, ${user.displayName}`
  }

  useEffect(() => {
    const time = setTimeout(setHour(new Date().getHours()), 1000)
    return () => clearTimeout(time)
  }, [hour])

  return <WelcomeMessageStyled>{greeting}</WelcomeMessageStyled>
}

const WelcomeMessageStyled = styled.h3`
  color: var(--mint);
  text-align: center;
  margin-top: 2em;
`
