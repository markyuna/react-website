import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { NavLinks } from '../Navbar/NavbarStyles';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <NavLinks onClick={() => logout({ returnTo: window.location.origin })}>Déconnecter</NavLinks>
  );
};

export default LogoutButton;
