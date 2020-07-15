import React, { useState, useEffect } from 'react'
import JournalForm from './components/JournalForm/JournalForm'
import JournalEntryList from './components/JournalEntry/JournalEntryList'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import TabBar from './components/TabBar/TabBar'
import { Switch, Route } from 'react-router-dom'

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
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <JournalEntryList journalEntries={journalEntries} />
            )}
          />

          <Route
            path="/journalform"
            component={() => <JournalForm onFormSubmit={handleJournalEntry} />}
          />
        </Switch>
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
