import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styled from 'styled-components'
import searchIcon from '../../images/chevron-right.svg'

SearchBar.propTypes = {
  searchInput: PropTypes.string,
  setSearchTerm: PropTypes.func,
}

export default function SearchBar({ searchInput, setSearchTerm }) {
  const searchField = useRef()

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function clearSearchField() {
    setSearchTerm('')
    searchField.current.focus()
  }

  return (
    <StyledSearchBar>
      <StyledSearchForm onSubmit={(event) => event.preventDefault()}>
        <StyledTextField
          ref={searchField}
          type="text"
          placeholder="search for an entry"
          value={searchInput}
          onChange={handleSearch}
          data-testid="textField"
        />
        <ClickAreaStyled
          onClick={clearSearchField}
          alt="delete"
        ></ClickAreaStyled>
        <SearchIconStyled src={searchIcon} />
      </StyledSearchForm>
    </StyledSearchBar>
  )
}

const StyledSearchBar = styled.div`
  display: flex;
  width: 250px;
  justify-content: left;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 20px;
`

const StyledSearchForm = styled.form`
  position: relative;
  height: 27px;
  width: 250px;
  border: 0.5px solid #8dacab;
`
const StyledTextField = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding-left: 10px;
  padding-right: 20%;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`
const ClickAreaStyled = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  background: #8dacab;
  height: 26.5px;
  width: 27px;
  border: 0.5px solid #8dacab;
  cursor: pointer;
`
const SearchIconStyled = styled.img`
  position: absolute;
  right: 2px;
  top: 1px;
  pointer-events: none;
`
