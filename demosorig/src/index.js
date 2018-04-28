
import React from 'react';
import { render } from 'react-dom';
import Demo from './IntegrationAutosuggest';
//import Demo from './IntegrationDownshift';
//import Demo from './IntegrationReactSelect';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Demo />, rootElement);
}
