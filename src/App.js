import React, { useState, useEffect } from 'react'

import JournalForm from './components/JournalForm/JournalForm'
import JournalEntryList from './components/JournalEntry/JournalEntryList'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import TabBar from './components/TabBar/TabBar'
import { Switch, Route } from 'react-router-dom'
import JournalDetailPage from './components/DetailsPage/JournalDetailPage'
import Register from './components/auth/Register'
// import Login from './components/auth/Login'
import useAuth from './components/auth/useAuth'
import LoginContext from './components/auth/LoginContext'
import firebaseApp from './firebase'
import Home from './pages/Home'
import Onboarding from './components/Onboarding/Onboarding'

function App() {
  const user = useAuth()
  const [journalEntries, setJournalEntries] = useState(
    () => JSON.parse(localStorage.getItem('journalEntries')) || []
  )

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries))
  }, [journalEntries])

  return (
    <>
      <LoginContext.Provider value={{ user, firebaseApp }}>
        <AppWrapper>
          <Switch>
            <Route exact path="/home">
              <Home />
              <JournalEntryList journalEntries={journalEntries} />
            </Route>
            <Route path="/login" component={Onboarding} />
            {/* <Route path="/register" component={Register} /> */}
            <Route
              exact
              path="/journalform"
              component={() => (
                <JournalForm onFormSubmit={handleJournalEntry} />
              )}
            />
            <Route
              exact
              path="/journalentry/:entryId"
              component={() => <JournalDetailPage values={journalEntries} />}
            />
          </Switch>
          <FooterStyled>
            <TabBar />
          </FooterStyled>
        </AppWrapper>
      </LoginContext.Provider>
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
  grid-template-columns: auto;
  grid-template-rows: 30% 60% 10%;
  justify-items: center;
  height: 100vh;
`

const FooterStyled = styled.div`
  width: 100%;
  height: 50px;
  grid-row: 3 / 4;
  align-self: end;
`
