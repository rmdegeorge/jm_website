import React from 'react';
import styled from 'styled-components';
import {NavLink} from './NavLink';

import WordmarkClay from '../assets/JM_wordmark_clay.png';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  position: relative;
  background-color: ${props => props.theme.primary2};
  top: 0;
  left: 0;
  right: 0;
`;
const Header = styled.div`
  width: 90%;
  border-bottom: 1px solid grey;
  text-align: center;
`;
const HeaderLogo = styled.img`
  object-fit: cover;
  object-position: 0 -50px;
  width: 300px;
  height: 200px;
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  height: 50px;
  padding: 10px;
  align-items: center;
`;

const Navbar = (props) => {
  return (
    <NavbarContainer>
      <Header>
        <NavLink to="/">
          <HeaderLogo src={WordmarkClay} alt="Jasper Moon Wellness" />
        </NavLink>
      </Header>
      <LinkWrapper>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Classes">Classes</NavLink>
        <NavLink to="/CorporateWellness">Corporate Wellness</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Store">Store</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </LinkWrapper>
    </NavbarContainer>
  )
}

export default Navbar;
