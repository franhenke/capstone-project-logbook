import { useEffect, useState } from 'react'
import firebaseApp from '../../firebase'
import * as ROUTES from '../../constants/routes'
import { useHistory } from 'react-router-dom'

export default function useAuth() {
  const [authUser, setAuthUser] = useState()
  const [isAuthCompleted, setIsAuthCompleted] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const unsubscribe = firebaseApp.onAuthStateChanged((user) => {
      setAuthUser(user ? user : null)

      if (!user) {
        history.push(ROUTES.LOGIN)
      }

      if (user) {
        setAuthUser(user)
        localStorage.setItem('user', JSON.stringify(user))
      }
      setIsAuthCompleted(true)
    })

    return () => unsubscribe()
  }, [history, isAuthCompleted])
  return [authUser, isAuthCompleted]
}
