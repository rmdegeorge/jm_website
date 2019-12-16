import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  margin: 5px;
  box-sizing: content-box;

  :hover {
    border-bottom: 1px solid #000000;
    border-top: 1px solid rgba(0, 0, 0, 0);
  }
`;

export const FacebookIcon = styled.img`
  height: 1.2em;
  width: auto;
`;
export const InstagramIcon = styled.img`
  height: 1.2em;
  width: auto;
`;
