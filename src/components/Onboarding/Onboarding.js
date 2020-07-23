import React from 'react'
import { useRouteMatch, Route, Switch } from 'react-router-dom'

import Login from '../../components/auth/Login'
import Register from '../../components/auth/Register'
import bgImage from '../../images/bgl.png'
import styled from 'styled-components'
import useAuth from '../../components/auth/useAuth'

export default function Onboarding() {
  const user = useAuth()
  let { path } = useRouteMatch()

  return (
    <>
      <BackgroundStyled>
        <WelcomeWrapperStyled>
          <WelcomeMessageStyled>
            {user ? <p>Welcome back, {user.displayName}</p> : null}
          </WelcomeMessageStyled>
        </WelcomeWrapperStyled>
        <Switch>
          <Route exact path={path} component={Login} />
          <Route path={`${path}/register`} component={Register} />
        </Switch>
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
