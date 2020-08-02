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
      {favJournalsList.map((values) => (
        <li key={values.caption} data-testid="journalEntry-navigation-item">
          <h3>{values.caption}</h3>
          <h3>{values.date}</h3>
          <h3>{values.city}</h3>
          <h3>{values.details}</h3>
        </li>
      ))}
    </>
  )
}
