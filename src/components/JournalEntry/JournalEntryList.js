import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

export default function JournalEntryList({ entry }) {
  const parsedDate = dayjs(entry.date)
  return (
    <EntryStyled>
      <CategorieStyled>Memory</CategorieStyled>
      <DateStyled>{parsedDate.format('DD.MM.YYYY')}</DateStyled>
      <CityStyled>{entry.city}</CityStyled>
      <CaptionStyled>{entry.caption}</CaptionStyled>
      <MemoryStyled>{entry.memory}</MemoryStyled>
    </EntryStyled>
  )
}

const EntryStyled = styled.div`
  height: 280px;
  width: 380px;
`
const CategorieStyled = styled.h2`
  font-size: 17px;
  font-weight: bolder;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #1e81a0;
  text-transform: uppercase;
`
const DateStyled = styled.p`
  font-size: 14px;
  color: var(--secondary);
  font-weight: light;
`
const CaptionStyled = styled.h3`
  font-size: 18px;
  color: var(--secondary);
  font-weight: 500;
`
const CityStyled = styled.p`
  font-size: 18px;
  padding: 5px 0;
  font-weight: bold;
  color: var(--secondary);
`
const MemoryStyled = styled.p`
  font-size: 16px;
  color: var(--text);
  width: 350px;
`
