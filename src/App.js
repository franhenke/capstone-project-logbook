import React, { useState, useEffect } from 'react'
import JournalForm from './components/JournalForm/JournalForm'
import JournalEntryList from './components/JournalEntry/JournalEntryList'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

function App() {
  const [journalEntries, setJournalEntries] = useState(
    () => JSON.parse(localStorage.getItem('journalEntries')) || []
  )

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries))
  }, [journalEntries])

  return (
    <>
      <AppWrapper>
        <JournalForm onFormSubmit={handleJournalEntry} />
        <JournalEntryList journalEntries={journalEntries} />
      </AppWrapper>
    </>
  )
  function handleJournalEntry(newJournalEntry) {
    newJournalEntry.id = uuid()
    setJournalEntries([...journalEntries, newJournalEntry])
  }
}

export default App

const AppWrapper = styled.div`
  display: grid;
  padding: 15px;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: center;
`
