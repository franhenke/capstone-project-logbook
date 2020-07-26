import firebaseApp from '../firebase'
import { useState } from 'react'


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

  async function loginWithFirebase({ email, password }) {
    await firebaseApp.signInWithEmailAndPassword(
      email,
      password
    )
      .then((res) => res)
      .catch((error) => error)
  }

  return { signUp, profile, setProfile }
}