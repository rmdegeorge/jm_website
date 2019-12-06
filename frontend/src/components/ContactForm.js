import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';

import useContactForm from '../hooks/customHooks.js'

const Form = styled.form`

`;
const Address = styled.div`
  display: flex;
  align-items: center;
`;

function ContactForm(props) {
  const doAThing = () => {              // this is where I put the functionality of the form submit
    alert(`Message Sent
          Name: ${inputs.firstName} ${inputs.lastName}
          Email: ${inputs.Email}
          Phone: ${inputs.phone}
          Subject: ${inputs.subject}
          Message: ${inputs.message}`)
  }
  const {inputs, handleChange, handleSubmit} = useContactForm(doAThing);

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={inputs.firstName} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={inputs.lastName} />
      <input type="email" name="email" placeholder="Email Address" onChange={handleChange} value={inputs.email} required />
      <input type="phone" name="phone" placeholder="555-555-5555" onChange={handleChange} value={inputs.phone} />
      <input type="text" name="subject" placeholder="Subject" onChange={handleChange} value={inputs.subject} required />
      <textarea type="text" name="message" placeholder="Type your message here..." onChange={handleChange} value={inputs.message} required />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default ContactForm;
