import { useEffect, useState } from 'react'
import firebaseApp from '../../firebase'
import * as ROUTES from '../../constants/routes'
import { useHistory } from 'react-router-dom'

export default function useAuth() {
  const [authUser, setAuthUser] = useState(null)
  const [isAuthCompleted, setIsAuthCompleted] = useState(true)

  const [userIsLoading, setUserIsLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const unsubscribe = firebaseApp.onAuthStateChanged((user) => {
      setAuthUser(user ? user : null)

      if (!user) {
        history.push(ROUTES.LOGIN)
      }

      if (user) {
        setAuthUser(user)
        localStorage.setItem('uid', user.uid)
      }
    })
    setUserIsLoading(false)
    setIsAuthCompleted(true)
    return () => unsubscribe()
  }, [])

  return [authUser, isAuthCompleted, userIsLoading]
}
