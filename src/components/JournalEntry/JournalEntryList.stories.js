import React from 'react'
// import styled from 'styled-components';
import JournalEntryList from './JournalEntryList'

export default {
  component: JournalEntryList,
  title: 'JournalEntryList',
  excludeStories: /.*Data$/,
}

const values = [
  {
    date: '2020-06-06',
    city: 'Dublin',
    caption: 'Dublin at night',
    memory: 'What a night',
  },
  {
    date: '2020-06-05',
    city: 'Dublin',
    caption: 'Dublin by day',
    memory: 'rain, rain, rain',
  },
]

export const journalEntryListFilled = () => <JournalEntryList values={values} />

export const journalEntryListEmpty = () => (
  <>
    <JournalEntryList values={values} />
  </>
)
