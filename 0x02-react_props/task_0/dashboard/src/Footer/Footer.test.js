import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer without crashing', () => {
  render(<Footer />);
});

test('renders the text "Copyright"', () => {
  render(<Footer />);
  const copyrightText = screen.getByText(/Copyright/i);
  expect(copyrightText).toBeInTheDocument();
});