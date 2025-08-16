import React from 'react';
import '@testing-library/jest-dom';
import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Drag and Drop List/i);
  expect(linkElement).toBeInTheDocument();
});
