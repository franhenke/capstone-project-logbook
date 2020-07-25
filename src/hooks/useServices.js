import firebaseApp, { db } from '../firebase'
import { useState } from 'react'
import * as ROUTES from '../routes'
import { useHistory } from 'react-router-dom'

export default function useServices() {
  let history = useHistory()
  const [isRegistered, setIsRegistered] = useState(false)
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    id: '',
  })

  const redirectTo = (path) => history.push(path)
  const resetForm = () => setIsRegistered(false)

  async function signUp({ name, email, password }) {
    try {
      const newUser = await firebaseApp.createUserWithEmailAndPassword(
        email,
        password
      )
      await newUser.user.updateProfile({
        displayName: name,
      })
      redirectTo(ROUTES.HOME)
      resetForm()
    } catch (error) {
      setIsRegistered({ ...isRegistered, error })
    }
  }
  return { signUp, profile, setProfile }
}
