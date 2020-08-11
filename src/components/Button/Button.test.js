import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Button from './Button'

describe('Button-Test', () => {
  it('should render a text', () => {
    const testText = 'Hola'
    render(<Button text={testText} />)
    expect(screen.getByText(testText)).toBeInTheDocument()
  })
})
