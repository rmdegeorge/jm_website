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

  const {inputs, handleChange, handleSubmit} = useContactForm();

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
      <input type="phone" name="phone" placeholder="555-555-5555" onChange={handleChange} />
      <input type="text" name="subject" placeholder="Subject" onChange={handleChange} required />
      <textarea type="text" name="message" placeholder="Type your message here..." onChange={handleChange} required />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default ContactForm;
