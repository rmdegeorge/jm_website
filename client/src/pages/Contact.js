import React from "react";
import styled from "styled-components";

import ContactForm from "../components/ContactForm";
import SocialMediaIconLink from "../components/SocialMediaIconLink";
import device from "../theme/GlobalStyle";

const {
  mobile,
  tabletPortrait,
  tabletLandscape,
  desktop,
  desktopLarge
} = device;

const ContactContainer = styled.div`
  max-width: 90%;
  margin: auto;
  display: flex;

  @media (${props => props.theme.media.mobile}) {
    flex-direction: column;
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    flex-direction: column;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
    flex-direction: column;
  }
  @media (${props => props.theme.media.desktop}) {
    flex-direction: row;
  }
  @media (${props => props.theme.media.desktopLarge}) {
    flex-direction: row;
  }
`;
const ContactInfoContainer = styled.div``;
const SocialMediaLinksWrapper = styled.div`
  margin: 8px 0 0 0;
`;

const Contact = props => {
  return (
    <ContactContainer>
      <ContactInfoContainer>
        <h1>Let's Connect</h1>
        <p>
          Get in touch to learn more about classes, workshops, and making yoga a
          part of your lifestyle.
        </p>
        <p>Salt Lake City, UT, USA</p>
        <a href="tel:+13852720413">+1 (385) 272-1370</a>
        <SocialMediaLinksWrapper>
          <SocialMediaIconLink type="fb" />
          <SocialMediaIconLink type="ig" />
        </SocialMediaLinksWrapper>
      </ContactInfoContainer>
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
