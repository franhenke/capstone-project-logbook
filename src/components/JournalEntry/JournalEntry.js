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
    <JournalEntryStyled>
      <SectionStyled>
        <CategorieStyled>{values.category}</CategorieStyled>
        <DateStyled>{parsedDate.format('DD MMM YYYY')}</DateStyled>
      </SectionStyled>
      <ContentStyled>
        <CaptionStyled>{values.caption}</CaptionStyled>
        <EntryStyled>
          <Truncate
            lines={2}
            ellipsis={
              <span>
                <LinkStyled to={`/journalentry/${values.caption}`}>
                  ... see more
                </LinkStyled>
              </span>
            }
          >
            {values.entry}
          </Truncate>
        </EntryStyled>
        {user ? (
          <AddToFaveListButton userId={user.uid} values={values} />
        ) : null}

        <CityStyled>
          <MarkerIconStyled src={markerIcon} />
          {values.city}
        </CityStyled>
      </ContentStyled>
    </JournalEntryStyled>
  )
}

const SectionStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`
const DateStyled = styled.p`
  font-size: 13px;
`
const CategorieStyled = styled.h2`
  font-size: 13px;
  letter-spacing: 0.3px;
  font-weight: lighter;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #8e969e;
`

const JournalEntryStyled = styled.div`
  color: var(--primary);
  height: 115px;
  margin-bottom: 40px;
`

const ContentStyled = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
`

const MarkerIconStyled = styled.img`
  color: #8e969e;
  height: 11px;
  vertical-align: baseline;
  padding-right: 5px;
`

const CityStyled = styled.h3`
  font-size: 11px;
  color: #8e969e;
  font-family: Roboto;
  font-weight: 400;
  margin-bottom: 5px;
`

const CaptionStyled = styled.h3`
  font-size: 15px;
  letter-spacing: 0.5px;
  font-weight: bold;
  margin-bottom: 3px;
`
const EntryStyled = styled.p`
  font-size: 12px;
  color: #8e969e;

  span {
    text-decoration: none;
    font-size: 12px;
    font-family: Roboto;
    font-weight: 500;
    color: #8e969e;
  }
`
