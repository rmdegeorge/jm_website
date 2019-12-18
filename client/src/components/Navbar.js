import React from "react";
import styled from "styled-components";

import jmlogotypeblk from "../assets/JM_logotype_blk.png";
import NavbarLinks from "../components/NavbarLinks";
import { NavLink } from "./styledComponents/CustomStyledComponents.js";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 130px;
  position: relative;
  background-color: ${props => props.theme.functional1};
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

const Navbar = props => {
  return (
    <NavbarContainer>
      <Header>
        <HeaderLogoLink to="/">
          <HeaderLogo src={jmlogotypeblk} alt="Jasper Moon Wellness" />
        </HeaderLogoLink>
      </Header>
      <NavbarLinks />
    </NavbarContainer>
  );
};

export default Navbar;
