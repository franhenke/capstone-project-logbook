import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bgImage from '../../images/bgl.png'
import chevron from '../../images/chevron-left.svg'

export default function Welcome() {
  let user = 'Franci'

  return (
    <>
      <BackgroundStyled>
        <WelcomeWrapperStyled>
          <WelcomeMessageStyled>Welcome back,</WelcomeMessageStyled>
          <WelcomeMessageStyled bold>{user}</WelcomeMessageStyled>
        </WelcomeWrapperStyled>

        <CTAWrapperStyled>
          <LinkStyled exact to="/">
            <CTAStyled>Let's create memories</CTAStyled>
            <IconStyled src={chevron} alt="marker" />
          </LinkStyled>
        </CTAWrapperStyled>
      </BackgroundStyled>
    </>
  )
}

const BackgroundStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const WelcomeWrapperStyled = styled.div`
  position: absolute;
  text-align: left;
  top: 70px;
`
const WelcomeMessageStyled = styled.h1`
  font-size: 40px;
  color: white;
  letter-spacing: 4px;
  font-weight: ${(props) => (props.bold ? 600 : 200)};
`

const CTAWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 55px;
  width: 90%;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #f2f3f6;
  letter-spacing: 3px;
  font-size: 21px;
  font-weight: 600;
`
const CTAStyled = styled.h2`
  text-align: left;
  font-size: 21px;
  color: white;
`

const IconStyled = styled.img`
  height: 25px;
`
