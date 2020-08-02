import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../components/SearchBar/SearchBar'
import ProfileHeader from '../components/Header/ProfileHeader'
import JournalEntryList from '../components/JournalEntry/JournalEntryList'
import LoginContext from '../components/auth/LoginContext'

export default function Homepage({ values }) {
  const [searchTerm, setSearchTerm] = useState('')
  const { user, userIsLoading } = useContext(LoginContext)

  const results = searchTerm
    ? values.filter((values) =>
        values.caption.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : values

  return (
    <>
      <ProfileHeader />
      <EntryContainerStyled>
        <SearchBar setSearchTerm={setSearchTerm} searchInput={searchTerm} />
        <ScrollableWrapper>
          <JournalEntryList values={values} journalEntries={results} />
        </ScrollableWrapper>
      </EntryContainerStyled>
    </>
  )
}

const EntryContainerStyled = styled.main`
  grid-row: 2 / 3;
  width: 90vw;
  padding: 0 15px;
`

const ScrollableWrapper = styled.div`
  height: 400px;
  overflow-y: scroll;

  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`
