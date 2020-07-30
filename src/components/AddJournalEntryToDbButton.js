import React from 'react'
import { db } from '../firebase/index'
import firebase from 'firebase'
import dayjs from 'dayjs'

export default function AddJournalEntryToDbButton({ userId, values }) {
  async function addToDb() {
    const parsedDate = dayjs(values.date)
    const journalFormData = {
      date: parsedDate.format('DD MMM YYYY'),
      city: values.city,
      caption: values.caption,
      category: values.category,
      details: values.entry,
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

  return <button onClick={addToDb}>Save</button>
}
