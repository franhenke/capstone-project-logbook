import firebaseApp from '../firebase'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function useServices() {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    id: '',
  })

  async function signUp({ name, email, password }) {
    try {
      const newUser = await firebaseApp.createUserWithEmailAndPassword(
        email,
        password
      )
      await newUser.user.updateProfile({
        displayName: name,
      })
    } catch (error) {
      setProfile({ ...setProfile, error })
    }
  }

  let history = useHistory()
  async function loginWithFirebase({ email, password }) {
    await firebaseApp.signInWithEmailAndPassword(email, password)
    history.push('/home')
  }

  return { signUp, profile, setProfile, loginWithFirebase }
}
