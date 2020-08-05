import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import firebaseConfig from './config'

firebaseApp.initializeApp(firebaseConfig)

const firebaseInit = () => {
  return firebaseApp.auth()
}

export default firebaseInit()

export const db = firebaseApp.firestore()
export const storage = firebaseApp.storage()
