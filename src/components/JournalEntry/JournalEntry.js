import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AddToFaveListButton from '../AddToFaveListButton'
import LoginContext from '../auth/LoginContext'
import styled from 'styled-components'
import dayjs from 'dayjs'
import Truncate from 'react-truncate'
import markerIcon from '../../images/mappin.svg'

export default function JournalEntry({ values }) {
  const parsedDate = dayjs(values.date)
  const { user } = useContext(LoginContext)

  return (
    <EntryContainerLink to={`/journalentry/${values.id}`}>
      <JournalEntryStyled>
        <SectionStyled>
          <CategorieStyled>{values.category}</CategorieStyled>
          <DateStyled>{parsedDate.format('DD MMM YYYY')}</DateStyled>
        </SectionStyled>
        <ContentStyled>
          <CaptionStyled>{values.caption}</CaptionStyled>
          <EntryStyled>
            <Truncate lines={2} ellipsis={<span>... see more</span>}>
              {values.entry}
            </Truncate>
            {user ? (
              <AddToFaveListButton userId={user.uid} values={values} />
            ) : null}
          </EntryStyled>

          <CityStyled>
            <MarkerIconStyled src={markerIcon} />
            {values.city}
          </CityStyled>
        </ContentStyled>
      </JournalEntryStyled>
    </EntryContainerLink>
  )
}

const SectionStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`
const DateStyled = styled.p`
  font-size: 14px;
`
const CategorieStyled = styled.h2`
  font-size: 14px;
  letter-spacing: 0.8px;
  font-weight: lighter;
`

const EntryContainerLink = styled.div`
  position: relative;
  width: 100%;
`

const JournalEntryStyled = styled.div`
  color: var(--primary);
  height: 115px;
  margin-bottom: 40px;

  /* display: flex;
  flex-direction: row; */
  /* margin: 10px 15px; */
`

const ContentStyled = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
`

const MarkerIconStyled = styled.img`
  color: #8e969e;
  height: 12px;
  vertical-align: baseline;
  padding-right: 5px;
`

const CityStyled = styled.h3`
  color: #707d8c;
  font-size: 12px;
  color: #8e969e;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 5px;
`

const CaptionStyled = styled.h3`
  font-size: 16px;
  letter-spacing: 1.1px;
  font-weight: bold;
  margin-bottom: 3px;
`
const EntryStyled = styled.p`
  font-size: 12px;

  a {
    text-decoration: none;
    font-size: 9px;
    font-family: Roboto;
    font-weight: 500;
    color: #86727c;
  }
`
