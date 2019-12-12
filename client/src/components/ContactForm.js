import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {useInput} from '../hooks/customHooks';
// import {useContactForm} from '../hooks/customHooks.js'
import {Form, TextInput, TextArea, Submit} from './styledFormComponents/StyledFormComponents';

const FormBody = styled(Form)`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
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
    <FormBody onSubmit={handleSubmit}>
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
    </FormBody>
  );
};

export default ContactForm;
