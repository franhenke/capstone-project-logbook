import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GetUserFavJournalsList from '../services/GetJournalEntriesFromDb/GetUserFavJournalsList'
import * as ROUTES from '../constants/routes'
import chevron from '../images/chevron-leftblue.svg'

export default function FaveListPage() {

  return (
    <>

      <HeaderStyled>
        <Link to={ROUTES.HOME}>
          <BackIconStyled src={chevron} alt="journalentry" />
        </Link>
        <HeaderTextStyled>Your favorite Journalentries</HeaderTextStyled>
      </HeaderStyled>
      <BookmarkContainerStyled>
        <GetUserFavJournalsList />
      </BookmarkContainerStyled>
    </>

  )

}



const HeaderStyled = styled.header`
position: relative;
 grid-row: 1/2;
 width: 100%;

`


const HeaderTextStyled = styled.h2`
  place-self: center start;
  color: var(--mint);
  padding-left: 2.5em;
  margin-top: 2em;
  width: 10em;
  `


const BackIconStyled = styled.img`
  height: 16px;
  position: absolute;
  top: 1em;
  left: 1em;
`



const BookmarkContainerStyled = styled.div`
grid-row: 2/3;
padding: 20px; 


`
