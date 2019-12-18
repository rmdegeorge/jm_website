import React, { useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { DataContext } from "../context/DataContextProvider";

import { NavLink } from "./styledComponents/CustomStyledComponents.js";

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 430px;
  height: 50px;
  padding: 10px;
  margin: 0 5% 0 0;
  align-items: center;
`;

const NavbarLinks = props => {
  const { token, logout } = useContext(DataContext);
  return (
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
  );
};

export default withRouter(NavbarLinks);
