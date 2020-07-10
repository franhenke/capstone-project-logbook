import React from 'react'
import JournalForm from './JournalForm'
import GlobalStyles from '../../GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    <div style={{ background: 'white' }}> {s()}</div>
  </>
))

export default {
  title: 'JournalForm',
  component: JournalForm,
}

export const JournalFormPreview = () => {
  return <JournalForm />
}
