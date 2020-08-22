import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar/SearchBar'
import ProfileHeader from '../components/Header/ProfileHeader'
import JournalEntryList from '../components/JournalEntry/JournalEntryList'
import ButtonToJournalForm from '../components/Button/ButtonToJournalForm'

Dashboard.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
}

export default function Dashboard({ values }) {
  const [searchTerm, setSearchTerm] = useState('')

  const results = values.filter((values) =>
    values.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
    values.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
    values.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <ProfileHeader />
      <EntryContainerStyled>
        <IntroStyled>Your Journalentries</IntroStyled>
        <SearchBar setSearchTerm={setSearchTerm} searchInput={searchTerm} />

        {results.length === 0 ?
          (
            <div>No entries found. Please change your search.</div>
          ) : (
            <JournalEntryList journalEntries={results} />
          )}
      </EntryContainerStyled>
      <ButtonToJournalForm />
    </>
  )
}

const EntryContainerStyled = styled.main`
  grid-row: 2 / 3;
  width: 90vw;
`


const IntroStyled = styled.h3`
  font-size: 16px;
  color: #8dacab;
  font-weight: bold;
`
