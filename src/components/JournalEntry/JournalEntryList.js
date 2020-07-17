import React from 'react'
import styled from 'styled-components'
import JournalEntry from './JournalEntry'

export default function JournalEntryList({ journalEntries }) {
  return (
    <>
      <ScrollableWrapper>
        {journalEntries.map((values) => (
          <JournalEntry key={values.id} values={values} />
        ))}
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
