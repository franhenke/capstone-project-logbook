import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import TabBar from './TabBar'
import { render, screen, fireEvent } from '@testing-library/react'

describe('TabBar', () => {
  it('should render the tabbar', () => {
    const history = createMemoryHistory()
    const renderedTabBar = render(
      <Router history={history}>
        <TabBar />
      </Router>
    )
    expect(renderedTabBar).toBeTruthy()
  })

  it('should render FaveListPage on click bookmarkIcon', () => {
    const history = createMemoryHistory()
    const { getByTestId } = render(
      <Router history={history}>
        <TabBar />
      </Router>
    )

    fireEvent.click(getByTestId('favlist'))
  })
})
