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
        <LogoutIconStyled src={logoutIcon} onClick={logoutFromFirebase} />
      ) : (
        <>
          <LoginIconStyled
            src={loginIcon}
            onClick={() => history.push('/login')}
          />{' '}
          |
          <RegisterIconStyled
            src={registerIcon}
            onClick={() => history.push('/register')}
          />
        </>
      )}
    </div>
  )
}

const LogoutIconStyled = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 100;
  height: 20px;
  width: 20px;
`

const LoginIconStyled = styled.img`
  position: absolute;
  top: 55px;
  right: 20px;
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
