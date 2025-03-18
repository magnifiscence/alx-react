import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders 2 input tags and 2 label tags', () => {
  render(<Login />);
  const inputElements = screen.getAllByRole('textbox');
  const labelElements = screen.getAllByText(/Email:|Password:/); // Use regex to match label text
  expect(inputElements.length).toBe(2);
  expect(labelElements.length).toBe(2);
});