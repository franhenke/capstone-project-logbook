import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AddToFaveListButton from '../AddToFaveListButton'
import LoginContext from '../auth/LoginContext'
import styled from 'styled-components'
import dayjs from 'dayjs'
import Truncate from 'react-truncate'
import markerIcon from '../../images/markerpin.svg'
import { Divider } from '../Divider/Divider'

export default function JournalEntry({ values }) {
  const parsedDate = dayjs(values.date)
  const { user } = useContext(LoginContext)

  return (
    <>
      <JournalEntryStyled>
        <ContentStyled>
          <CategorieStyled>{values.category}</CategorieStyled>
          <DateStyled>{parsedDate.format('DD MMM YYYY')}</DateStyled>

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

          <CityStyled>
            <MarkerIconStyled src={markerIcon} />
            {values.city}
          </CityStyled>
          <FaveIconStyled>
            {user ? (
              <AddToFaveListButton userId={user.uid} values={values} />
            ) : null}
          </FaveIconStyled>
        </ContentStyled>
      </JournalEntryStyled>
      <Divider />
    </>
  )
}
const JournalEntryStyled = styled.div`
  color: var(--primary);
  height: 100px;
  margin-bottom: 40px;
`

const FaveIconStyled = styled.div`
  height: 25px;
  position: absolute;
  right: 20px;
  top: 20px;
`

const DateStyled = styled.p`
  font-size: 12px;
`
const CategorieStyled = styled.h2`
  position: relative;
  font-size: 10px;
  line-height: 20px;
  margin: 10px 0 5px;
  font-weight: lighter;
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    left: 1px;
    top: 17px;
    height: 1px;
    background-color: #8dacab;
  }
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #8e969e;
`

const ContentStyled = styled.div`
  position: relative;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
`

const MarkerIconStyled = styled.img`
  position: absolute;
  top: 3px;
  height: 11px;
  left: 75px;
`

const CityStyled = styled.h3`
  position: relative;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;
  margin-top: 3px;
`

const CaptionStyled = styled.h3`
  font-size: 15px;
  letter-spacing: 0.5px;
  font-weight: bold;
  margin-bottom: 3px;
`
const EntryStyled = styled.p`
  font-size: 12px;
  opacity: 0.8;
  color: #8e969e;

  span {
    text-decoration: none;
    font-size: 12px;
    font-family: Roboto;
    font-weight: 500;
    color: #8e969e;
  }
`
