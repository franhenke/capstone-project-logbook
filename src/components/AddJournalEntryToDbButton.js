import React from 'react'
import { db } from '../firebase/index'
import firebase from 'firebase'
import styled from 'styled-components'

export default function AddJournalEntryToDbButton({ userId, values }) {
  async function addToDb() {
    const journalFormData = {
      caption: values.caption,
      category: values.category,
      city: values.city,
      date: values.date,
      entry: values.entry,
      image: values.image,
    }

    const userDoc = db.collection('journalentries').doc(userId)

    const docSnapshot = await userDoc.get()

    if (docSnapshot.exists) {
      await userDoc.update({
        UserJournalEntries: firebase.firestore.FieldValue.arrayUnion(
          journalFormData
        ),
      })
    } else {
      await userDoc.set({
        UserJournalEntries: [journalFormData],
      })

      console.log(journalFormData)
    }
  }

  return <ButtonStyled onClick={addToDb}>Save</ButtonStyled>
}

const ButtonStyled = styled.button`
  margin-top: 20px;
`
