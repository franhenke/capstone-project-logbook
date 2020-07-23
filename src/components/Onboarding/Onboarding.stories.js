import React from 'react'
import Onboarding from './Onboarding'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Onboarding',
  component: Onboarding,
}

export const OnboardingWithText = () => (
  <Router>
    <Onboarding />
  </Router>
)
