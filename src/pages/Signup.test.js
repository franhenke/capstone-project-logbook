import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Signup from './Signup'
import '@testing-library/jest-dom/extend-expect'

import 'mutationobserver-shim'
import { render, screen } from '@testing-library/react'

const history = createMemoryHistory()

describe('RegisterForm renders input fields correctly', () => {
  it('should render the email input field', () => {
    const emailInput = screen.findByRole('textbox', 'email')
    expect(emailInput).toBeTruthy()
  })

  it('should render the password input field', () => {
    const passwordInput = screen.findByRole('textbox', 'password')
    expect(passwordInput).toBeTruthy()
  })
})

describe('Input tests', () => {
  global.MutationObserver = window.MutationObserver
  beforeEach(() => {
    const { getAllByRole } = render(
      <Router history={history}>
        <Signup />
      </Router>
    )
  })
})
