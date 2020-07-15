import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import JournalForm from '../JournalForm/JournalForm'
import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'
import BG-image from '../../images/backgrounds.jpg'
export default function Welcome() {

return (<>

<BackgroundStyled>
<WelcomeStyled>Welcome Back, Franci</WelcomeStyled>
<LinkStyled to="/journalform">Go</LinkStyled>
</BackgroundStyled>

</>

)

}

const BackgroundStyled = styled.div`
background-image: url(${Bg-image});
height: 100vh;
`
const WelcomeStyled = styled.h1`
font-size: 20px;
color: white;
text-align: right;
`
const LinkStyled = styled.a`
text-decoration: none;
font-size: 18px;
`