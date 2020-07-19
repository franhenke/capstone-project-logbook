import React from 'react'
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
    category: 'Thoughts',
    caption: 'A night to remember',
    memory:
      'Unprecedented challenge humanitarian green space social innovation. Boots on the ground global change-makers dynamic; granular, her body her rights because our work citizen-centered. ',
  },
  {
    date: '2020-06-05',
    city: 'Dublin',
    category: 'Memory',
    caption: 'Going to Moher',
    memory:
      'Families ecosystem invest inclusive, correlation, bandwidth. Progress her body her rights effective altruism vibrant co-creation technology we must stand up inspiring. Challenges and opportunities; green space design thinking our work black lives matter.',
  },
]

export const journalEntryListFilled = () => (
  <JournalEntryList journalEntries={values} />
)
