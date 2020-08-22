import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import searchIcon from '../UI/images/searchglass.svg'
import cross from '../UI/images/crossmint.svg'


SearchBar.propTypes = {
  searchInput: PropTypes.string,
  setSearchTerm: PropTypes.func,
}

export default function SearchBar({ searchInput, setSearchTerm }) {

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)
  const searchField = useRef()

  const animateWidth = useSpring({
    width: isSearchBarVisible ? '190px' : '0px',
  })


  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  function openSearchBar() {
    setIsSearchBarVisible(true)
    searchField.current.focus()
  }

  function endSearch() {
    setSearchTerm('')
    setIsSearchBarVisible(false)
    searchField.current.focus()
  }



  return (
    <FilterSectionStyled>
      {isSearchBarVisible ? (
        <ToggleIcon src={cross} alt="cross" onClick={endSearch} />
      ) : (
          <ToggleIcon src={searchIcon} alt="searchIcon" onClick={openSearchBar} />
        )}
      <SearchFormStyled
        style={animateWidth}
        onSubmit={(event) => event.preventDefault()}>
        <TextFieldStyled
          ref={searchField}
          type="text"
          placeholder="search for an entry"
          value={searchInput}
          onChange={handleSearch}
          data-testid="textField"
        />

      </SearchFormStyled>

    </FilterSectionStyled>

  )
}

const FilterSectionStyled = styled.div`
 display: flex;
  justify-content: right;
  align-items: center;
  padding: 1em 1em;
`

const SearchFormStyled = styled(animated.form)`
  position: relative;
  height: 2em;
  border-bottom: 1px solid var(--lowopacity);
`
const TextFieldStyled = styled.input`
position: absolute;
  border: none;
  padding: 0 1em;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`

const ToggleIcon = styled.img`
  height: 1.2em;
  cursor: pointer;
  z-index: 10;
`
