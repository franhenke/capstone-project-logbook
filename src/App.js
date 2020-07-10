import React, { useState, useEffect } from 'react'
import JournalForm from './components/JournalForm'
import JournalEntry from './components/JournalEntry/JournalEntry'

function App() {
  const [entryList, setEntryList] = useState([])

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('JournalListEntry'))
    storage && setEntryList(storage)
  }, [])

  useEffect(() => {
    localStorage.setItem('JournalListEntry', JSON.stringify(entryList))
  }, [entryList])

  return (
    <>
      <JournalForm onFormSubmit={handleJournalEntry} />
      <JournalEntry entryList={entryList} />
    </>
  )
  function handleJournalEntry(newJournalEntry) {
    setEntryList([newJournalEntry, ...entryList])
  }
}

export default App
