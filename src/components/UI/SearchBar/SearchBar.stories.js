import React from 'react'
import SearchBar from './SearchBar'

export default {
  component: SearchBar,
  title: 'Ui Components/SearchBar',
}

export const ClickToOpen = () => <SearchBar />

export const WithSearchInput = () => <SearchBar searchInput="Beach" />
