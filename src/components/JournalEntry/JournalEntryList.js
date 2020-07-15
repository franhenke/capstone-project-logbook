import React from 'react'
import styled from 'styled-components'
import JournalEntry from './JournalEntry'

export default function JournalEntryList({ journalEntries }) {
  return (
    <>
      {journalEntries.map((values) => (
        <JournalEntry key={values.id} values={values} />
      ))}
    </>
  )
}
