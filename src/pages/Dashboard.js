import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar/SearchBar'
import ProfileHeader from '../components/Header/ProfileHeader'
import JournalEntryList from '../components/JournalEntry/JournalEntryList'
import ButtonToForm from '../components/Button/ButtonToForm'

Dashboard.propTypes = {
  values: PropTypes.arrayOf(PropTypes.object),
}

export default function Dashboard({ values }) {
  const [searchTerm, setSearchTerm] = useState('')

  const results = searchTerm
    ? values.filter((values) =>
      values.caption.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : values

  return (
    <>
      <ProfileHeader />

      <EntryContainerStyled>
        <IntroStyled>Your Journalentries</IntroStyled>
        <SearchBar setSearchTerm={setSearchTerm} searchInput={searchTerm} />
        <ScrollableWrapper>
          {results.length > 0 ? (
            <JournalEntryList journalEntries={results} />
          ) : (
              <div>No entries found. Please change your search.</div>
            )}
        </ScrollableWrapper>
      </EntryContainerStyled>
      <ButtonToForm />
    </>
  )
}

const EntryContainerStyled = styled.main`
  grid-row: 2 / 3;
  width: 90vw;
`

const ScrollableWrapper = styled.div`
  height: 400px;
  overflow-y: scroll;

  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`
const IntroStyled = styled.h3`
  font-size: 16px;
  color: #8dacab;
  font-weight: bold;
`
