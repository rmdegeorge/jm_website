import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import useContactForm from '../hooks/customHooks.js'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  width: 100%;
  height: 4.5em;
  line-height: 2em;
  padding: 8px;
  margin: 8px;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;

  :hover {
    background-color: rgba(0,0,0,0.1);
  }
  :focus {
    background-color: rgba(0,0,0,0.2);
  }
`;
const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #000000;
  resize: none;
  height: 10em;
  width: 100%;
  line-height: 2em;
  padding: 8px;
  margin: 8px;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;

  :hover {
    background-color: rgba(0,0,0,0.1);
  }
  :focus {
    background-color: rgba(0,0,0,0.2);
  }
`;
const Submit = styled.button`
  border: none;
  padding: 8px;
  height: 2em;
  width: 100%;
  margin: 8px;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  background-color: #000000;
  color: #ffffff
  font-size: 15pt;
  font-weight: bold;

  :hover {
    background-color: rgba(0,0,0,0.5);
  }
  :focus {
    background-color: rgba(0,0,0,0.5);
  }
`;

function ContactForm(props) {
  const sendMessage = () => {              // this is where I put the functionality of the form submit
    axios.post('/send', inputs)
      .then((res) => {
        if (res.data.status === 'success') {
          alert("Message Sent! Jasper will get back to you as soon as possible.")
          //************* Should make a function that clears the form here *******************//
        } else if (res.data.status === 'fail') {
          alert("Message failed to send. Sorry for the inconvenience.")
        };
      })
      .catch((err) => {
        console.error(err);
      });
    // alert(`Message Sent
    //       Name: ${inputs.firstName} ${inputs.lastName}
    //       Email: ${inputs.Email}
    //       Phone: ${inputs.phone}
    //       Subject: ${inputs.subject}
    //       Message: ${inputs.message}`)
  }
  const {inputs, handleChange, handleSubmit} = useContactForm(sendMessage);

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <TextInput type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={inputs.firstName} required />
        <TextInput type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={inputs.lastName} />
      </div>
      <div>
        <TextInput type="email" name="email" placeholder="Email Address" onChange={handleChange} value={inputs.email} required />
        <TextInput type="phone" name="phone" placeholder="555-555-5555" onChange={handleChange} value={inputs.phone} />
      </div>
      <TextInput type="text" name="subject" placeholder="Subject" onChange={handleChange} value={inputs.subject} required />
      <TextArea type="text" name="message" placeholder="Type your message here..." onChange={handleChange} value={inputs.message} required />
      <Submit type="submit">Submit</Submit>
    </Form>
  );
};

export default ContactForm;
