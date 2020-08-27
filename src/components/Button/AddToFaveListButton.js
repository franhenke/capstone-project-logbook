import React, { useState } from 'react'
import { db } from '../../firebase/index'
import firebase from 'firebase'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import bookmarkIcon from '../UI/images/bookmarkEmpty.svg'
import bookmarkIconFilled from '../UI/images/bookmarkFilled.svg'


export default function AddToFaveList({ userId, values }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  async function addToFavList() {
    const journalData = {
      caption: values.caption,
      category: values.category,
      place: values.place,
      date: values.date,
      entry: values.entry,
      image: values.image,

    }
    const Msg = () => (
      <div data-cy="toast">
        <ToastTextStyled>Journalentry saved to bookmarks</ToastTextStyled>
      </div>
    )

    const userDoc = db.collection('favlist').doc(userId)
    const docSnapshot = await userDoc.get()

    if (docSnapshot.exists) {
      await userDoc.update({
        journalEntries: firebase.firestore.FieldValue.arrayUnion(journalData),
      })
      toast(<Msg />, {
        position: 'bottom-center',
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setIsButtonClicked(!isButtonClicked)
    } else {
      await userDoc.set({
        journalEntries: [journalData],
      })
    }
  }

  return (
    <AddToFaveIconStyled onClick={addToFavList} whileTap={{ scale: 0.9 }}>
      {isButtonClicked ? (
        <img src={bookmarkIconFilled} alt="" />
      ) : (
          <img src={bookmarkIcon} alt="" />
        )}
    </AddToFaveIconStyled>
  )
}

const AddToFaveIconStyled = styled(motion.div)`
  height: 15px;
  width: 15px;

  img {
    height: 20px;
  }
`

const ToastTextStyled = styled.p`
  text-align: center;
  font-size: 12px;
`
