import React from 'react'
import styled from 'styled-components'
import JournalEntry from './JournalEntry'
import UserBar from '../auth/UserBar'
import Profile from '../Profile/Profile'
import Welcome from '../Welcome/Welcome'
import Search from '../Search/Search'
import ProfileHeader from '../Header/ProfileHeader'

export default function JournalEntryList({ journalEntries }) {
  return (
    <>
      <ProfileHeader />
      <EntryContainerStyled>
        <Search />
        <ScrollableWrapper>
          {journalEntries.map((values) => (
            <JournalEntry key={values.id} values={values} />
          ))}
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
