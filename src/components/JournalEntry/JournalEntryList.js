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
  height: 350px;
  overflow-y: scroll;
  &::after {
    content: '';
    display: block;
    height: 40px;
  }
`
