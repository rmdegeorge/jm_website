import React, {useContext} from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';
import {DataContext} from '../context/DataContextProvider';

import WordmarkClay from '../assets/JM_wordmark_clay.png';
import {NavLink} from './styledComponents/CustomStyledComponents.js'

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
  const {token, logout} = useContext(DataContext);
  const pathCheckPattern = new RegExp('^/admin', 'i');
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
        <NavLink to="/Instagram">Instagram</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Store">Store</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        {
          token
          ?
          <NavLink to="/" onClick={logout}>Logout</NavLink>
          :
          null
        }
      </LinkWrapper>
    </NavbarContainer>
  )
}

export default withRouter(Navbar);
