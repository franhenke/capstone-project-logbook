import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GetUserFavJournalsList from '../components/GetUserFavJournalsList'

export default function FaveListPage() {

  return (
    <>
      <EntryContainerStyled>
        <BookmarkPageStyled>
          <h3>Your favorite Journalentries</h3>
          <GetUserFavJournalsList />
        </BookmarkPageStyled>
      </EntryContainerStyled>
    </>

  )

}

const EntryContainerStyled = styled.main`

  width: 90vw;
  margin-top: 120px;
`

const BookmarkPageStyled = styled.div`
grid-row: 1/3;
padding: 20px; 

`