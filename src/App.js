import React, { useEffect, useState } from 'react'
import * as ROUTES from './constants/routes'
import JournalForm from './components/JournalForm/JournalForm'
import styled from 'styled-components'
import TabBar from './components/TabBar/TabBar'
import { Redirect, Switch, Route, useLocation } from 'react-router-dom'
import JournalDetailPage from './components/DetailsPage/JournalDetailPage'
import useAuth from './components/auth/useAuth'
import LoginContext from './components/auth/LoginContext'
import firebaseApp from './firebase'
import { db } from './firebase/index'
import useServices from './services/useServices'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import NotFound from './pages/NotFound'
import FaveListPage from './pages/FaveListPage'

function App() {
  const { signUp, loginWithFirebase, setProfile } = useServices()
  const [user, isAuthCompleted] = useAuth()
  const location = useLocation()
  const values = GetUserJournalEntries()

  if (!isAuthCompleted) {
    return <div>....Loading</div>
  }

  return (
    <>
      <LoginContext.Provider value={{ user, isAuthCompleted, firebaseApp }}>
        <AppWrapper>
          <Switch>
            <Redirect exact from="/" to={ROUTES.HOME} />

            <Route path={ROUTES.REGISTER}>
              <SignUp signUp={signUp} setProfile={setProfile} />
            </Route>
            <Route exact path={ROUTES.LOGIN}>
              <Login
                loginWithFirebase={loginWithFirebase}
                setProfile={setProfile}
              />
            </Route>

            <Route
              exact
              path={ROUTES.HOME}
              component={() => <Dashboard values={values} />}
            />
            <Route path={ROUTES.JOURNALFORM}>
              <JournalForm />
            </Route>
            <Route
              path={'/journalentry/:entryId'}
              component={() => <JournalDetailPage values={values} />}
            />

            <Route exact path={ROUTES.FAVLIST}>
              <FaveListPage />
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

  function GetUserJournalEntries() {
    const [userJournalEntries, setuserJournalEntries] = useState([])

    useEffect(() => {
      if (!user) return

      const docRef = db.collection('journalentries').doc(user.uid)

      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            setuserJournalEntries(doc.data().UserJournalEntries)
          }
          console.log(doc.data().UserJournalEntries)
        })
        .catch(function (error) {
          console.log('Error getting document:', error)
        })
    }, [user])

    return userJournalEntries
  }
}

export default App

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20% 73% 7%;
  justify-items: center;
  height: 100vh;
`

const FooterStyled = styled.div`
  width: 100%;
  grid-row: 3 / 4;
`
