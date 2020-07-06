import React from 'react'
import JournalForm from './JournalForm'
import Datepicker from './Datepicker'

export default {
  title: 'JournalForm',
  component: JournalForm,
}

export const JournalFormPreview = () => {
  return (
    <>
      <JournalForm />
    </>
  )
}
