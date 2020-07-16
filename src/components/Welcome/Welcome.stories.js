import React from 'react'
import Welcome from './Welcome'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Welcome',
  component: Welcome,
}

export const welcomeWithText = () => (
  <Router>
    <Welcome />
  </Router>
)

export const welcomeWithoutText = () => (
  <Router>
    <Welcome />
  </Router>
)
