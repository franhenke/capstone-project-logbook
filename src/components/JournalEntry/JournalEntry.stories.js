import React from 'react'
import JournalEntry from './JournalEntry'

export default {
  component: JournalEntry,
  title: 'JournalEntry',
  excludeStories: /.*Data$/,
}

const values = [
  {
    city: 'Dublin',
    date: '2020-06-06',
    caption: 'This was fun',
    memory: 'a day to remember"',
  },
  {
    city: 'Dublin',
    date: '2020-06-01',
    caption: 'Why does it always rain on me',
    memory: 'Why didn´t I buy the umbrella',
  },
]

export const WithTwoEntries = () => <JournalEntry values={values} />

export const WithNoEntries = () => <JournalEntry values={[]} />
