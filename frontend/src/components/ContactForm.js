import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {useInput} from '../hooks/customHooks';
// import {useContactForm} from '../hooks/customHooks.js'

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
  const {value: firstName, bind: bindFirstName, reset: resetFirstName} = useInput('');
  const {value: lastName, bind: bindLastName, reset: resetLastName} = useInput('');
  const {value: email, bind: bindEmail, reset: resetEmail} = useInput('');
  const {value: phone, bind: bindPhone, reset: resetPhone} = useInput('');
  const {value: subject, bind: bindSubject, reset: resetSubject} = useInput('');
  const {value: message, bind: bindMessage, reset: resetMessage} = useInput('');

  const inputs = {
    firstName,
    lastName,
    email,
    phone,
    subject,
    message
  }
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
  }
  // const {inputs, handleInputChange, handleSubmit} = useContactForm(sendMessage);
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhone();
    resetSubject();
    resetMessage();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <TextInput type="text" name="firstName" placeholder="First Name" {...bindFirstName} required />
        <TextInput type="text" name="lastName" placeholder="Last Name" {...bindLastName} />
      </div>
      <div>
        <TextInput type="email" name="email" placeholder="Email Address" {...bindEmail} required />
        <TextInput type="phone" name="phone" placeholder="555-555-5555" {...bindPhone} />
      </div>
      <TextInput type="text" name="subject" placeholder="Subject" {...bindSubject} required />
      <TextArea type="text" name="message" placeholder="Type your message here..." {...bindMessage} required />
      <Submit type="submit">Submit</Submit>
    </Form>
  );
};

export default ContactForm;
