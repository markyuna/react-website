// import { Modal } from './Modal';
// import { render, screen } from '@testing-library/react';
// import React from 'react';
// import '@testing-library/jest-dom/extend-expect';

// test('renders Modal component', function () {
//     render(<Modal title="Bonjour les gens" onClose={() => null}>Bonjour</Modal>)
//     const title = screen.getByText('Bonjour les gens')
//     expect(title).toBeInTheDocument()
// })

import { render, screen } from '@testing-library/react';
import React from 'react';
import { Modal } from './Modal';

test('renders Modal component', function () {
  // Create a container element in the DOM
  const container = document.createElement('div');
  document.body.appendChild(container);

  // Render the Modal component into the container
  render(<Modal title="Bonjour les gens" onClose={() => null}>Bonjour</Modal>, container);

  // Perform your assertions
  const title = screen.getByText('Bonjour les gens');
  expect(title).toBeInTheDocument();

  // Clean up: remove the container element from the DOM
  document.body.removeChild(container);
});
