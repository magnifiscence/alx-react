import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


test('renders Header without crashing', () => {
  render(<Header />);
});

test('renders img and h1 tags', () => {
  render(<Header />);
  const imgElement = screen.getByRole('img');
  const h1Element = screen.getByRole('heading', { level: 1 });
  expect(imgElement).toBeInTheDocument();
  expect(h1Element).toBeInTheDocument();
});