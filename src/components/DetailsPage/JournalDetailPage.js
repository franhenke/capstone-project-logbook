import React from 'react'
import { useParams } from 'react-router-dom'
import JournalEntry from '../JournalEntry/JournalEntry'
import { Link } from 'react-router-dom'

export default function JournalDetailPage({ values }) {
  const { entryId } = useParams()
  const [selectedEntry] = values.filter((values) => entryId === values.id)

  return (
    <>
      <Link to={`/`}>Go back to your entries</Link>
      <h2>{selectedEntry.date}</h2>
      <h2>{selectedEntry.city}</h2>
      <h2>{selectedEntry.caption}</h2>
      <h2>{selectedEntry.memory}</h2>
      {/* <JournalEntry values={entryId} /> */}
    </>
  )
}
