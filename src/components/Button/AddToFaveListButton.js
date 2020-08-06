import React from 'react'
import { db } from '../../firebase/index'
import firebase from 'firebase'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import heartIcon from '../../images/heart.svg'

export default function AddToFaveList({ userId, values }) {
  async function addToFavList() {
    const journalData = {
      caption: values.caption,
      category: values.category,
      place: values.place,
      date: values.date,
      entry: values.entry,
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
    } else {
      await userDoc.set({
        journalEntries: [journalData],
      })
    }
  }

  return <AddToFaveIconStyled src={heartIcon} onClick={addToFavList} />
}

const AddToFaveIconStyled = styled.img`
  height: 16px;
  width: 16px;
`

const ToastTextStyled = styled.p`
  text-align: center;
  font-size: 12px;
`
