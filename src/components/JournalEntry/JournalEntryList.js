import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

export default function JournalEntryList({ entry }) {
  const parsedDate = dayjs(entry.values.date)
  return (
    <EntryStyled>
      <p>{parsedDate.format('DD.MM.YYYY')}</p>
      <p>{entry.values.city}</p>
      <p>{entry.values.caption}</p>
      <p>{entry.values.memory}</p>
    </EntryStyled>
  )
}

const EntryStyled = styled.div`
  list-style-type: none;
  height: 150px;
  width: 300px;
  margin: 20px 0;

  p {
    margin: 5px;
    word-break: break-all;
  }
`
