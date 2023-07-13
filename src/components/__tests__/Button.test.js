import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import { useNavigate } from 'react-router-dom';

describe('Button component', () => {
  const navigate = useNavigate();

  it('renders button with correct text', () => {
    render(<Button text="Voir les oeuvres" />);
    const buttonElement = screen.getByText(/Voir les oeuvres/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
