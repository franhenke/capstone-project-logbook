import React from 'react'
import { db } from '../../firebase/index'
import firebase from 'firebase'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import sendIcon from '../../images/sendIcon2.svg'

export default function AddJournalEntryToDbButton({ userId, values }) {
  async function addToDb() {
    const journalFormData = {
      caption: values.caption,
      category: values.category,
      place: values.place,
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

  return <AnimatedButtonStyled onClick={addToDb} />
}

const AnimatedButtonStyled = styled(motion.button)`
  background-image: url(${sendIcon});
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: var(--mint);
  height: 45px;
  width: 45px;
  border-radius: 50px;
  border: none;
`
