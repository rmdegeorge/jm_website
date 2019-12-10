import React from 'react';
import styled from 'styled-components';

import ContactForm from '../components/ContactForm';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  margin: 0 5% 0 5%;
`;

const Contact = (props) => {
  return (
    <ContactContainer>
      <div>
        Let's Connect
        Get in touch to learn more about classes, workshops, and making yoga a part of your lifestyle.
        Salt Lake City, UT, USA
        JasperMoonWellness@gmail.com (let's consider replacing your email with a link to the contact form may help reduce spam)
        +1 (385) 272-1370
      </div>
      <ContactForm />
    </ContactContainer>
  )
}

export default Contact;
