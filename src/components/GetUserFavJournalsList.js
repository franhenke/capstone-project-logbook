import React, { useState, useEffect, useContext } from 'react'
import { db } from '../firebase/index'
import LoginContext from './auth/LoginContext'

export default function GetUserFavJournalsList() {
  const [favJournalsList, setFavJournalsList] = useState([])
  const { user } = useContext(LoginContext)

  useEffect(() => {
    if (!user) return

    const docRef = db.collection('favlist').doc(user.uid)

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setFavJournalsList(doc.data().journalEntries)
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error)
      })
  }, [user])

  return (
    <>
      {favJournalsList.map((journalEntry) => (
        <li key={journalEntry.date} data-testid="journalEntry-navigation-item">
          <h3>{journalEntry.caption}</h3>
          <h3>{journalEntry.date}</h3>
          <h3>{journalEntry.city}</h3>
          <h3>{journalEntry.details}</h3>
        </li>
      ))}
    </>
  )
}
