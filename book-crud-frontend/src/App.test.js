
// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // make sure App.js exists
import '@testing-library/jest-dom';

test('renders App without crashing', async () => {
  render(<App />);
  expect(await screen.findByText(/book management/i)).toBeInTheDocument();
});
