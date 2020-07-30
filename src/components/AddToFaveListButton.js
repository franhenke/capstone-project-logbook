import React from 'react'
import { db } from '../firebase/index'
import firebase from 'firebase'

export default function AddToFaveListButton({ userId, values }) {
  async function addToFavList() {
    const journalData = {
      date: values.date,
      city: values.city,
      caption: values.caption,
      category: values.category,
      details: values.entry,
    }

    const userDoc = db.collection('favlist').doc(userId)

    const docSnapshot = await userDoc.get()

    if (docSnapshot.exists) {
      await userDoc.update({
        journalEntries: firebase.firestore.FieldValue.arrayUnion(journalData),
      })
    } else {
      await userDoc.set({
        journalEntries: [journalData],
      })

      console.log(journalData)
    }
  }

  return <button onClick={addToFavList}>Add to faves</button>
}
