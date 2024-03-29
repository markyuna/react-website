import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarStyles.js';
import { data } from '../../data/NavbarData.js';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Form/Login.js';
import LogoutButton from '../Form/Logout.js';

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === '/') {
      scrollTo(id);
    }

    navigate(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer role="navbar">
          <NavLogo to="/">
            <NavIcon src="./assets/logo.png" alt="logo" role="logo"/>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
            {isAuthenticated ? (
              <NavItem>
                <LogoutButton />
              </NavItem>
            ) : (
              <NavItem>
                {/* <LoginButton /> */}
              </NavItem>
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

