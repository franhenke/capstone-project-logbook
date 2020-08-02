import React from 'react'
import styled from 'styled-components'
import GetUserJournalEntries from '../GetUserJournalEntries'

export default function JournalEntryListFromDb() {
  return (
    <>
      <ScrollableWrapper>
        <GetUserJournalEntries />
      </ScrollableWrapper>
    </>
  )
}

const ScrollableWrapper = styled.main`
  height: 400px;
  overflow-y: scroll;
  grid-row: 2 / 3;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`
