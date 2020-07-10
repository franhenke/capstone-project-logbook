import React from 'react'
// import styled from 'styled-components';
import JournalEntryList from './JournalEntryList'

export default function JournalEntry({ entryList }) {
  return (
    <>
      {entryList.map((entry, index) => (
        <JournalEntryList key={index} entry={entry} />
      ))}
    </>
  )
}
