import React, { useState, useEffect } from 'react'
import * as ROUTES from './constants/routes'
import JournalForm from './components/JournalForm/JournalForm'
import JournalEntryList from './components/JournalEntry/JournalEntryList'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import TabBar from './components/TabBar/TabBar'
import { Switch, Route, useLocation } from 'react-router-dom'
import JournalDetailPage from './components/DetailsPage/JournalDetailPage'
import useAuth from './components/auth/useAuth'
import LoginContext from './components/auth/LoginContext'
import firebaseApp from './firebase'
import Home from './pages/Home'
import UserBar from './components/auth/UserBar'
import useServices from './hooks/useServices'
import SignUp from './pages/Signup'
import Login from './pages/Login'

function App() {
  const { signUp, loginWithFirebase, setProfile } = useServices()
  const [user, authCompleted] = useAuth()
  const location = useLocation()

  const [journalEntries, setJournalEntries] = useState(
    () => JSON.parse(localStorage.getItem('journalEntries')) || []
  )

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries))
  }, [journalEntries])

  if (!authCompleted) {
    return <LoadingScreen>Almost there....</LoadingScreen>
  }

  return (
    <>
      <LoginContext.Provider value={{ user, firebaseApp }}>
        <AppWrapper>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Home />
              <JournalEntryList journalEntries={journalEntries} />
            </Route>

            <Route exact path={ROUTES.JOURNALFORM}>
              <JournalForm onFormSubmit={handleJournalEntry} />
            </Route>

            <Route exact path={ROUTES.JOURNALDETAILS}>
              <JournalDetailPage values={journalEntries} />
            </Route>
            <Route path={ROUTES.LOGIN}>
              <Login
                loginWithFirebase={loginWithFirebase}
                setProfile={setProfile}
              />
            </Route>
            <Route path={ROUTES.REGISTER}>
              <SignUp signUp={signUp} setProfile={setProfile} />
            </Route>
          </Switch>
          <FooterStyled>
            {location.pathname !== '/' &&
              location.pathname !== '/login' &&
              location.pathname !== '/register' && <TabBar />}
          </FooterStyled>
        </AppWrapper>
      </LoginContext.Provider>
    </>
  )
  function handleJournalEntry(newJournalEntry) {
    newJournalEntry.id = uuid()
    setJournalEntries([newJournalEntry, ...journalEntries])
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

const LoadingScreen = styled.div`
  color: var(--sand);
  padding: 30px;
`
