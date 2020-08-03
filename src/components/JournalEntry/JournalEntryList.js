import React from 'react'
import JournalEntry from './JournalEntry'
import { v4 as uuid } from 'uuid'

export default function JournalEntryList({ journalEntries }) {
  return (
    <>
      {journalEntries.map((values) => (
        <JournalEntry key={uuid()} values={values} />
      ))}
    </>
  )
}
