import React from 'react'
import JournalDetailPage from './JournalDetailPage'

export default {
  component: JournalDetailPage,
  title: 'JournalDetailPage',
  excludeStories: /.*Data$/,
}

const entrySelected = [
  {
    date: '2020-06-06',
    place: 'Dublin',
    category: 'Thoughts',
    caption: 'A night to remember',
    memory:
      'Unprecedented challenge humanitarian green space social innovation. Boots on the ground global change-makers dynamic; granular, her body her rights because our work citizen-centered. ',
  },
]

export const JournalDetailPageFilled = () => (
  <JournalDetailPage values={entrySelected} />
)
