import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GetUserFavJournalsList from '../services/GetJournalEntriesFromDb/GetUserFavJournalsList'
import * as ROUTES from '../constants/routes'
import chevron from '../images/chevron-leftblue.svg'

export default function FaveListPage() {

  return (
    <>

      <EntryContainerStyled>
        <Link to={ROUTES.HOME}>
          <BackIconStyled src={chevron} alt="journalentry" />
        </Link>
        <BookmarkPageStyled>
          <HeaderTextStyled>Your favorite Journalentries</HeaderTextStyled>
          <GetUserFavJournalsList />
        </BookmarkPageStyled>
      </EntryContainerStyled>
    </>

  )

}

const BackIconStyled = styled.img`
  color: black;
  height: 16px;
  position: absolute;
  top: 20px;
  left: 120x;
`


const EntryContainerStyled = styled.main`

  width: 90vw;
  margin-top: 50px;
  
`

const BookmarkPageStyled = styled.div`
grid-row: 1/3;
padding: 20px; 

`

const HeaderTextStyled = styled.h3`
  color: #8DACAB;
  font-size: 18px;
  margin-bottom: 30px;
  padding-left: 10px;


`