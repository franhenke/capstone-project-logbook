import React, { useContext } from 'react'
import LoginContext from './LoginContext'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import logoutIcon from '../../images/log-out.svg'
import loginIcon from '../../images/log-in.svg'
import registerIcon from '../../images/user-plus.svg'

export default function UserBar() {
  const { user, firebaseApp } = useContext(LoginContext)
  const history = useHistory()

  async function logoutFromFirebase() {
    await firebaseApp.signOut()
    history.push('/login')
  }

  return (
    <div>
      {user ? (
        <LogoutIconStyled onClick={logoutFromFirebase}>
          <img src={logoutIcon} alt="Icon for the logout" />
          Logout
        </LogoutIconStyled>
      ) : (
          <>
            <LoginIconStyled
              src={loginIcon}
              alt=""
              onClick={() => history.push('/login')}
            />{' '}
          |
            <RegisterIconStyled
              src={registerIcon}
              alt=""
              onClick={() => history.push('/register')}
            />
          </>
        )}
    </div>
  )
}

const LogoutIconStyled = styled.div`
  font-size: 16px;
  padding-left: 25px;
  position: relative;
  cursor: pointer;
  z-index: 100;
  margin-top: 15px;

  img {
    position: absolute;
    left: 0;
    top: 2px;
    height: 18px;
  }
`

const LoginIconStyled = styled.img`
  position: absolute;
  top: 55px;
  right: 30px;
  cursor: pointer;
  z-index: 100;
  height: 20px;
  width: 20px;
`
const RegisterIconStyled = styled.img`
  position: absolute;
  top: 55px;
  right: 20px;
  cursor: pointer;
  z-index: 100;
  height: 20px;
  width: 20px;
`
