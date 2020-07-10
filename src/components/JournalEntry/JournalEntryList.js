import React from 'react'
import styled from 'styled-components'

export default function JournalEntryList({ entry }) {
  return (
    <EntryStyled>
      <p>{entry.values.date}</p>
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
