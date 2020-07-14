import React, { useState, useEffect } from 'react'
import JournalForm from './components/JournalForm/JournalForm'
import JournalEntryList from './components/JournalEntry/JournalEntryList'
import styled from 'styled-components'

function App() {
  const [journalEntries, setJournalEntries] = useState([])

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('JournalList'))
    storage && setJournalEntries(storage)
  }, [])

  useEffect(() => {
    localStorage.setItem('JournalList', JSON.stringify(journalEntries))
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
    setJournalEntries([newJournalEntry, ...journalEntries])
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
