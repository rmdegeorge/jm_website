import React from "react";
import styled from "styled-components";

import { NavLink } from "./styledComponents/CustomStyledComponents.js";
import SocialMediaLink from "./SocialMediaIconLink";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  padding: 16px;
`;
const SMLinksWrapper = styled.div`
  display: flex;
`;
const AdminLoginLink = styled(NavLink)`
  font-size: 9pt;
  :hover {
    border: none;
  }
`;

function Footer(props) {
  return (
    <FooterContainer>
      <SMLinksWrapper>
        <SocialMediaLink type="fb" />
        <SocialMediaLink type="ig" />
      </SMLinksWrapper>
      <AdminLoginLink to="/admin">Admin Login</AdminLoginLink>
      ©2019 by Jasper Moon Wellness
    </FooterContainer>
  );
}

export default Footer;
