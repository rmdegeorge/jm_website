import React from "react";
import styled from "styled-components";

import IGIconSVG from "../assets/instagram-icon.svg";
import FBIconSVG from "../assets/facebook-icon.svg";

const SocialMediaLink = styled.a`
  margin: 8px;
`;
const SocialMediaIcon = styled.img`
  height: 1.2em;
  width: auto;
`;

export default function SocialMediaIconLink(props) {
  return props.type === "fb" ? (
    <SocialMediaLink href="https://facebook.com/jaspermoonwellness">
      <SocialMediaIcon src={FBIconSVG} />
    </SocialMediaLink>
  ) : (
    <SocialMediaLink href="https://instagram.com/jaspermoonwellness">
      <SocialMediaIcon src={IGIconSVG} />
    </SocialMediaLink>
  );
}
