import React from 'react'
import JournalFormSubmitButton from './JournalFormSubmitButton'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Button to add journalentry to Db',
  component: JournalFormSubmitButton,
  decorators: [withKnobs],
}

export const buttonWithText = () => (
  <JournalFormSubmitButton disabled={boolean('Disabled', false)} />
)

export const disabledButtonWithText = () => (
  <JournalFormSubmitButton disabled={boolean('Disabled', true)} />
)
