import React from "react";
import styled from "styled-components";

import ContactForm from "../components/ContactForm";
import SocialMediaIconLink from "../components/SocialMediaIconLink";

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin: 0 5% 0 5%;
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
