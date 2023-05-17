import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '../Hero/Hero';

describe('Button component', () => {
  it('renders button with correct text', () => {
    render(<Button text="Voir les oeuvres" />);
    const buttonElement = screen.getByText(/Voir les oeuvres/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
