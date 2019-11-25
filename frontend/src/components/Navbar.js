import React from 'react';
import styled from 'styled-components';
import {NavLink} from './NavLink';

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;
const Title = styled.div`
  width: 90%;
  border-bottom: 1px solid grey;
  text-align: center;
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
      <Title>
        <h1>Jasper Moon Wellness</h1>
      </Title>
      <LinkWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Classes">Classes</NavLink>
        <NavLink to="/CorporateWellness">Corporate Wellness</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </LinkWrapper>
    </NavbarContainer>
  )
}

export default Navbar;
