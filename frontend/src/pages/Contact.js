import React from 'react';
import styled from 'styled-components';

import ContactForm from '../components/ContactForm';

const ContactContainer = styled.div`

`;

const Contact = (props) => {
  return (
    <ContactContainer>
      <ContactForm />
    </ContactContainer>
  )
}

export default Contact;
