import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLinks } from '../Navbar/NavbarStyles';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <NavLinks onClick={() => loginWithRedirect()}>Conexion</NavLinks>
  );
};

export default LoginButton;
