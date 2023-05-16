import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Hero from '../Hero/Hero.js';
import {
	FormColumn,
	FormSection,
	FormRow,
	FormInputRow,
	FormTitle,
} from '../Form/FormStyles';

import { Container } from '../../globalStyles';


function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>
  }
  return (
    isAuthenticated && (
      <>
        <Hero />
      <FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
            <img src={user.picture} alt={user.name} />
            <FormTitle>{user.name}</FormTitle>
            <FormTitle>{user.email}</FormTitle>
          </FormColumn>
          <FormInputRow>
          </FormInputRow>
        </FormRow>
      </Container>
      </FormSection>

      </>
    )
  );
};
export default Profile;
