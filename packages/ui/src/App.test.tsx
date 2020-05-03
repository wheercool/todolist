import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Application', () => {
  const rendered =  render(<App />);
  expect(rendered.baseElement).toBeInTheDocument();
});
