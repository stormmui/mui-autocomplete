
import React from 'react';
import { render } from 'react-dom';
import Demo from './JsonAutosuggest';
//import Demo from './JsonDownshift';
//import Demo from './JsonReactSelect';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Demo />, rootElement);
}
