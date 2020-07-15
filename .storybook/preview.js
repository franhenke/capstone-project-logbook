import { addParameters, addDecorator } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import './storybook.css'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

addParameters({
  background: { name: 'white smoke', value: '#F6F6F6' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
