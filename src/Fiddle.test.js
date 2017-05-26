import React from 'react';
import ReactDOM from 'react-dom';
import Fiddle from './Fiddle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fiddle />, div);
});
