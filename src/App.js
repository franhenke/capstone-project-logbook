import React, { useState, useEffect } from 'react'
import JournalForm from './components/JournalForm/JournalForm'
import JournalEntry from './components/JournalEntry/JournalEntry'
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
      <Wrapper>
        <JournalForm onFormSubmit={handleJournalEntry} />
        <JournalEntry journalEntries={journalEntries} />
      </Wrapper>
    </>
  )
  function handleJournalEntry(newJournalEntry) {
    setJournalEntries([newJournalEntry, ...journalEntries])
  }
}

export default App

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: center;
`
