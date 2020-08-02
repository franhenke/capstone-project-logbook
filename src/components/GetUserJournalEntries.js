import React, { useState, useEffect, useContext } from 'react'
import { db } from '../firebase/index'
import LoginContext from './auth/LoginContext'
import styled from 'styled-components'
import Truncate from 'react-truncate'
import markerIcon from '../images/mappin.svg'
import AddToFaveListButton from '../components/AddToFaveListButton'
import dayjs from 'dayjs'

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

  return (
    <>
      {userJournalEntries.map((values) => (
        <div key={values.date} data-testid="journalEntry-navigation-item">
          <JournalEntryStyled>
            <DateStyled>{values.date}</DateStyled>
            <ContentStyled>
              <CategorieStyled>{values.category}</CategorieStyled>
              <CityStyled>
                <MarkerIconStyled src={markerIcon} />
                {values.city}
              </CityStyled>
              <CaptionStyled>{values.caption}</CaptionStyled>
              <EntryStyled>
                <Truncate lines={2} ellipsis={<span>... see more</span>}>
                  {values.entry}
                </Truncate>
                {user ? (
                  <AddToFaveListButton userId={user.uid} values={values} />
                ) : null}
              </EntryStyled>
            </ContentStyled>
          </JournalEntryStyled>
        </div>
      ))}
    </>
  )
}

const JournalEntryStyled = styled.div`
  color: var(--primary);
  display: grid;
  grid-template-columns: 18% 82%;
  grid-template-rows: 1fr;
  margin: 10px 15px;
`

const DateStyled = styled.p`
  text-align: center;
  font-size: 18px;

  align-self: center;
`

const ContentStyled = styled.div`
  padding: 10px 5px 10px 20px;
  font-family: Roboto;
`

const CategorieStyled = styled.h2`
  display: inline-block;
  color: #004f64;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.3px;
  margin-bottom: 5px;
`
const MarkerIconStyled = styled.img`
  color: #8e969e;
  height: 12px;
  vertical-align: baseline;
  padding-right: 5px;
`

const CityStyled = styled.h3`
  font-size: 16px;
  color: #8e969e;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 5px;
`

const CaptionStyled = styled.h3`
  display: block;

  font-size: 18px;

  font-weight: 600;
  margin-bottom: 3px;
`
const EntryStyled = styled.p`
  font-size: 16px;

  a {
    text-decoration: none;
    font-size: 9px;
    font-family: Roboto;
    font-weight: 500;
    color: #86727c;
  }
`
