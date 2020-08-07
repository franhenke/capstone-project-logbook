import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import searchIcon from '../../images/chevron-right.svg'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import bookmarkIconFilled from '../../images/bookmarkFilled.svg'

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
    <FilterSectionStyled>
      <SearchFormStyled onSubmit={(event) => event.preventDefault()}>
        <TextFieldStyled
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

      </SearchFormStyled>
      <BookmarkLinkStyled to={ROUTES.FAVLIST} />
    </FilterSectionStyled>

  )
}

const FilterSectionStyled = styled.section`
  display: flex;
  flex-direction: row;
  align-content: center;
`

const SearchFormStyled = styled.form`
  position: relative;
  width: 250px;
  border: 0.5px solid #8dacab;
  margin: 8px 0 25px;
`
const TextFieldStyled = styled.input`
  height: 16px;
  border: none;
  padding-left: 10px;
  padding-bottom: 8px;
  padding-right: 20%;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #abb3bb;
    font-size: 14px;
    vertical-align: center;
  }
`
const ClickAreaStyled = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  background: #8dacab;
  height: 24px;
  width: 27px;
  border: 0.5px solid #8dacab;
  cursor: pointer;
`
const SearchIconStyled = styled.img`
  position: absolute;
  right: 1px;
  top: 1px;
  pointer-events: none;
`

const BookmarkLinkStyled = styled(Link)`
  background-image: url(${bookmarkIconFilled});
  position: absolute;
  background-repeat: no-repeat;

  margin-left: px;
  margin-top: 10px;
  width: 25px;
  height: 25px;
 right: 28px;
 top: 191px;
`
