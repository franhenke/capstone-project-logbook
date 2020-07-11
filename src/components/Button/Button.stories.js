import React from 'react'
import Button from './Button'
import GlobalStyles from '../../GlobalStyles'
import { addDecorator } from '@storybook/react'

addDecorator((s) => (
  <>
    <GlobalStyles />
    <div style={{ background: '#F6F6F6' }}> {s()}</div>
  </>
))

export default {
  title: 'Button',
  component: Button,
}

export const buttonWithText = () => <Button text="Save" />

export const disabledButtonWithText = () => <Button disabled text="disabled" />
