import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button label', () => {
  render(<Button label={'button'} />);
  const linkElement = screen.getByText(/button/i);
  expect(linkElement).toBeInTheDocument();
});
