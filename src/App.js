import React from 'react'
import * as ROUTES from './constants/routes'
import JournalForm from './components/JournalForm/JournalForm'
import styled from 'styled-components'
import TabBar from './components/TabBar/TabBar'
import { Redirect, Switch, Route, useLocation } from 'react-router-dom'
import JournalDetailPage from './components/DetailsPage/JournalDetailPage'
import useAuth from './components/auth/useAuth'
import LoginContext from './components/auth/LoginContext'
import firebaseApp from './firebase'
import useServices from './services/useServices'
import SignUp from './pages/Signup'
import GetUserFavJournalsList from './components/GetUserFavJournalsList'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import NotFound from './pages/NotFound'
import GetUserJournalEntries from './components/GetUserJournalEntries'

function App() {
  const { signUp, loginWithFirebase, setProfile } = useServices()
  const [user, userIsLoading] = useAuth()
  const location = useLocation()
  const values = GetUserJournalEntries()

  return (
    <>
      <LoginContext.Provider value={{ user, userIsLoading, firebaseApp }}>
        <AppWrapper>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path={ROUTES.HOME}>
              <Dashboard values={values} />
            </Route>
            <Route exact path={ROUTES.JOURNALFORM}>
              <JournalForm />
            </Route>
            <Route exact path={'/journalentry/:entryId'}>
              <JournalDetailPage values={values} />
            </Route>
            <Route exact path={'/favjournalentries'}>
              <GetUserFavJournalsList />
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
            <Route component={NotFound} />
          </Switch>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
            closeOnClick
            rtl={false}
          />

          <FooterStyled>
            {location.pathname !== '/' &&
              location.pathname !== '/login' &&
              location.pathname !== '/register' && <TabBar />}
          </FooterStyled>
        </AppWrapper>
      </LoginContext.Provider>
    </>
  )
}

export default App

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 25% 65% 10%;
  justify-items: center;
  height: 100vh;
`

const FooterStyled = styled.div`
  width: 100%;
  height: 50px;
  grid-row: 3 / 4;
  align-self: end;
`
