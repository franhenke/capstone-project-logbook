import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

export default function JournalEntryList({ entry }) {
  const parsedDate = dayjs(entry.date)
  return (
    <EntryStyled>
      <p>{parsedDate.format('DD.MM.YYYY')}</p>
      <p>{entry.city}</p>
      <p>{entry.caption}</p>
      <p>{entry.memory}</p>
    </EntryStyled>
  )
}

const EntryStyled = styled.div`
  height: 150px;
  width: 300px;

  p {
    margin: 5px;
    word-break: break-all;
  }
`
