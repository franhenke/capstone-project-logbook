import React from 'react'
import JournalEntry from './JournalEntry'
import { ScrollableWrapper } from '../UI/ScrollableWrapper'

export default function JournalEntryList({ journalEntries }) {
  return (
    <>
      <ScrollableWrapper>
        {journalEntries.map((values) => (
          <JournalEntry key={values.entry} values={values} />
        ))}
      </ScrollableWrapper>
    </>
  )
}
