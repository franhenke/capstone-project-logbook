import React, { useState, useEffect } from 'react'
import JournalForm from './components/JournalForm/JournalForm'
import JournalEntryList from './components/JournalEntry/JournalEntryList'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import TabBar from './components/TabBar/TabBar'

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
        <FooterStyled>
          <TabBar />
        </FooterStyled>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FooterStyled = styled.div`
  width: 100%;
  height: 50px;
`
