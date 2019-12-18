import React, { useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { DataContext } from "../context/DataContextProvider";

import jmlogotypeblk from "../assets/JM_logotype_blk.png";
import { NavLink } from "./styledComponents/CustomStyledComponents.js";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  position: relative;
  background-color: ${props => props.theme.primary2};
  top: 0;
  left: 0;
  right: 0;
`;
const Header = styled.div`
  margin: 24px 0 24px 5%;
`;
const HeaderLogoLink = styled(NavLink)`
  :hover {
    border: none;
  }
`;
const HeaderLogo = styled.img`
  max-height: 75px;
  width: auto;
  height: auto;
`;
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  height: 50px;
  padding: 10px;
  margin: 0 5% 0 0;
  align-items: center;
`;

const Navbar = props => {
  const { token, logout } = useContext(DataContext);
  return (
    <NavbarContainer>
      <Header>
        <HeaderLogoLink to="/">
          <HeaderLogo src={jmlogotypeblk} alt="Jasper Moon Wellness" />
        </HeaderLogoLink>
      </Header>
      <LinkWrapper>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Classes">Classes</NavLink>
        <NavLink to="/CorporateWellness">Corporate Wellness</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        {/* <NavLink to="/Store">Store</NavLink> */}
        <NavLink to="/Contact">Contact</NavLink>
        {token ? (
          <NavLink to="/" onClick={logout}>
            Logout
          </NavLink>
        ) : null}
      </LinkWrapper>
    </NavbarContainer>
  );
};

export default withRouter(Navbar);
