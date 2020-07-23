import React, { useContext } from 'react'
import LoginContext from './LoginContext'
import { useHistory } from 'react-router-dom'

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
        <button onClick={logoutFromFirebase}>Logout</button>
      ) : (
        <>
          <button onClick={() => history.push('/login')}>Login</button> |
          <button onClick={() => history.push('/login/register')}>
            Register
          </button>
        </>
      )}
    </div>
  )
}
