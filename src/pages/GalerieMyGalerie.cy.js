import { mount } from '@cypress/react';
import '@cypress/react/support';
import Galerie from '../components/Galerie/Galerie';

Cypress.Commands.add('mount', mount);

describe('<MyGalerie />', () => {
  it('renders', () => {
    cy.mount(<Galerie />);
  });
});
