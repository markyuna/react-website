import { mount } from '@cypress/react';
import '@cypress/react/support';

Cypress.Commands.add('mount', mount);

describe('<MyGalerie />', () => {
  it('renders', () => {
    cy.mount(<MyGalerie />);

  })
})
