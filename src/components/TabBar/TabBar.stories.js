import React from 'react'
import TabBar from './TabBar'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'TabBar',
  component: TabBar,
}
export const TabBarPreview = () => {
  return (
    <Router>
      <TabBar />
    </Router>
  )
}
