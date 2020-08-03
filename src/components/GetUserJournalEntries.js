import React, { useState, useEffect, useContext } from 'react'
import { db } from '../firebase/index'
import LoginContext from './auth/LoginContext'
import styled from 'styled-components'
import Truncate from 'react-truncate'
import markerIcon from '../images/mappin.svg'
import AddToFaveListButton from '../components/AddToFaveListButton'
import dayjs from 'dayjs'
import JournalEntryFromDb from './JournalEntry/JournalEntryFromDb'

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
    return userJournalEntries
  }, [user])

  return (
    <>
      {userJournalEntries.map((values) => (
        <JournalEntryFromDb
          key={values.date}
          values={values}
          data-testid="journalEntry-navigation-item"
        />
      ))}
    </>
  )
}
