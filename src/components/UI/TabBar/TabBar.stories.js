import React from 'react'
import TabBar from './TabBar'
import StoryRouter from 'storybook-react-router'
import { addDecorator } from '@storybook/react'

addDecorator(StoryRouter())

export default {
  title: 'UI Components / TabBar',
  component: TabBar,
}
export const TabBarPreview = () => {
  return <TabBar />
}
