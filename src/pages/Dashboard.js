import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../components/UI/SearchBar/SearchBar'
import DashboardHeader from '../components/DashboardHeader/DashboardHeader'
import JournalEntryList from '../components/JournalEntry/JournalEntryList'
import LinkButtonToJournalForm from '../components/Button/LinkButtonToJournalForm'

Dashboard.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
}

export default function Dashboard({ values }) {
  const [searchTerm, setSearchTerm] = useState('')

  const results = values.filter(
    (values) =>
      values.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
      values.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
      values.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <DashboardHeader />
      <EntryContainerStyled>
        <IntroStyled>Your Journalentries</IntroStyled>
        <SearchBar setSearchTerm={setSearchTerm} searchInput={searchTerm} />

        {results.length === 0 ? (
          <div>No entries found. Please change your search.</div>
        ) : (
          <JournalEntryList journalEntries={results} />
        )}
      </EntryContainerStyled>
      <LinkButtonToJournalForm />
    </>
  )
}

const EntryContainerStyled = styled.main`
  grid-row: 2 / 3;
  width: 90vw;
`

const IntroStyled = styled.h2`
  width: 100px;
  color: #8dacab;
  font-weight: bold;
`
