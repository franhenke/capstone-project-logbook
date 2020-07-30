import React from 'react'
import styled from 'styled-components'
import JournalEntry from './JournalEntry'
import GetUserJournalEntries from '../GetUserJournalEntries'

export default function JournalEntryListFromDb({ journalEntries }) {
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

const ScrollableWrapper = styled.main`
  height: 400px;
  overflow-y: scroll;
  grid-row: 2 / 3;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`
