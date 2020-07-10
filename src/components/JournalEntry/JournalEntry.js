import React from 'react'
// import styled from 'styled-components';
import JournalEntryList from '../JournalEntry/JournalEntryList'

export default function JournalEntry({ journalEntries }) {
  return (
    <>
      {journalEntries.map((entry) => (
        <JournalEntryList key={entry.id} entry={entry} />
      ))}
    </>
  )
}
