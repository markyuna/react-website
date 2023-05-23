import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from './NavbarStyles.js';
import { data } from '../../data/NavbarData';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from '../Form/Login';
import LogoutButton from '../Form/Logout';

const Navbar = () => {

  const { isAuthenticated } = useAuth0();

  const [show, setShow] = useState(false);
  const history = useNavigate();
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

    history.push(to);
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src="./assets/logo.png" alt="logo" />
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
              <>
                <NavItem>
                <LogoutButton />
                </NavItem>
              </>
            ) : (
              <NavItem>
                <LoginButton />
              </NavItem>
            )}

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import IconButton from "@material-ui/core/IconButton";
// import { Badge } from "@material-ui/core";
// import { ShoppingCart } from "@material-ui/icons";
// import { useStateValue } from "../../StateProvider";
// import { useAuth0 } from '@auth0/auth0-react';
// import { actionTypes } from "../../reducer";

// import { data } from '../../data/NavbarData';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import LoginButton from '../Form/Login';
// import LogoutButton from '../Form/Logout';
// import { CgMenuRight } from 'react-icons/cg';
// import { FaTimes } from 'react-icons/fa';
// import { IconContext } from 'react-icons';

// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   NavIcon,
//   MobileIcon,
//   NavMenu,
//   NavLinks,
//   NavItem,
// } from './NavbarStyles.js';

// const Navbar = () => {
//   const { isAuthenticated } = useAuth0();
//   const [{ basket, user }, dispatch] = useStateValue();
//   const [show, setShow] = useState(false);
//   const history = useNavigate();
//   const location = useLocation();

//   const handleClick = () => {
//     if (user) {
//       dispatch({
//         type: actionTypes.EMPTY_BASKET,
//         basket: [],
//       });
//       history.push("/");
//     }
//   };

//   const scrollTo = (id) => {
//     const element = document.getElementById(id);

//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//       });
//     }
//   };

//   const closeMobileMenu = (to, id) => {
//     if (id && location.pathname === '/') {
//       scrollTo(id);
//     }

//     history.push(to);
//     setShow(false);
//   };

//   return (
//     <IconContext.Provider value={{ color: '#fff' }}>
//       <Nav>
//         <NavbarContainer>
//           <NavLogo to="/">
//             <NavIcon src="./assets/logo.png" alt="logo" />
//           </NavLogo>
//           <MobileIcon onClick={handleClick}>
//             {show ? <FaTimes /> : <CgMenuRight />}
//           </MobileIcon>

//           <NavMenu show={show}>
//             {data.map((el, index) => (
//               <NavItem key={index}>
//                 <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
//                   {el.text}
//                 </NavLinks>
//               </NavItem>
//             ))}
//             {isAuthenticated ? (
//               <>
//                 <NavItem>
//                   <LogoutButton />
//                   <Link to='/checkout-page'>
//                     <IconButton aria-label='show cart items' color='inherit'>
//                       <Badge badgeContent={basket?.length} color='secondary'>
//                         <ShoppingCart fontSize='large' color='primary' />
//                       </Badge>
//                     </IconButton>
//                   </Link>
//                 </NavItem>
//               </>
//             ) : (
//               <NavItem>
//                 <LoginButton />
//               </NavItem>
//             )}
//           </NavMenu>
//         </NavbarContainer>
//       </Nav>
//     </IconContext.Provider>
//   );
// };

// export default Navbar;
