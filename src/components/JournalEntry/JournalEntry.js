import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import dayjs from 'dayjs'
import Truncate from 'react-truncate'
import markerIcon from '../../images/mappin.svg'

export default function JournalEntry({ values }) {
  const parsedDate = dayjs(values.date)

  return (
    <EntryContainerLink to={`/journalentry/${values.id}`}>
      <JournalEntryStyled>
        <DateStyled>{parsedDate.format('DD MMM YYYY')}</DateStyled>

        <ContentStyled>
          <CategorieStyled>{values.category}</CategorieStyled>
          <CityStyled>
            <MarkerIconStyled src={markerIcon} />
            {values.city}
          </CityStyled>
          <CaptionStyled>{values.caption}</CaptionStyled>
          <MemoryStyled>
            <Truncate lines={2} ellipsis={<span>... see more</span>}>
              {values.memory}
            </Truncate>
          </MemoryStyled>
        </ContentStyled>
      </JournalEntryStyled>
    </EntryContainerLink>
  )
}

const EntryContainerLink = styled(Link)`
  position: relative;
  display: block;
  text-decoration: none;

  width: 100%;
`

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
const MemoryStyled = styled.p`
  font-size: 16px;

  a {
    text-decoration: none;
    font-size: 9px;
    font-family: Roboto;
    font-weight: 500;
    color: #86727c;
  }
`
