import { useState, useEffect, useContext } from 'react'
import { db } from '../firebase/index'
import LoginContext from './auth/LoginContext'

export default function GetUserJournalEntries() {
  const [userJournalEntries, setuserJournalEntries] = useState([])
  const { user } = useContext(LoginContext)

  useEffect(() => {
    if (!user) return

    const docRef = db.collection('journalentries').doc(user.uid)

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setuserJournalEntries(doc.data().UserJournalEntries)
        }
        console.log(doc.data().UserJournalEntries)
      })
      .catch(function (error) {
        console.log('Error getting document:', error)
      })
  }, [user])

  return userJournalEntries
}
