iimport React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters, addDecorator } from '@storybook/react';
import './storybook.css';
import GlobalStyles from '../src/GlobalStyles';

addDecorator((s) => (
  <>
    <GlobalStyles />
    {s()}
  </>
));

addParameters({
  background: { value: '#F6F6F6' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});