import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBtnLink } from '../Navbar/NavbarStyles';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <NavBtnLink onClick={() => loginWithRedirect()}>Conexion</NavBtnLink>
  );
};

export default LoginButton;
