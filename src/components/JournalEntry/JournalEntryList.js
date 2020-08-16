import React from 'react'
import JournalEntry from './JournalEntry'

export default function JournalEntryList({ journalEntries }) {
  return (
    <>
      {journalEntries.map((values) => (
        <JournalEntry key={values.entry} values={values} />
      ))}
    </>
  )
}
