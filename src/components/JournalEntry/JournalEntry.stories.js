import React from 'react'
import JournalEntry from './JournalEntry'

export default {
  component: JournalEntry,
  title: 'Journal Entry',
}

const values = {
  category: 'Memory',
  place: 'Dublin',
  date: '2020-06-06',
  caption: 'This was fun',
  entry:
    'You’re on an island with white-sand beaches and turquoise waves, after all! Whether you want to rent a chair and umbrella and park yourself in the sand or rent a jet ski for a few hours of excitement, Isla Verde is the perfect beach day, all within 15 minutes of the city.',
}

export const defaultEntry = () => <JournalEntry values={values} />
