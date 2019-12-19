import React from "react";
import axios from "axios";
import styled from "styled-components";

import { useInput } from "../hooks/customHooks";
import {
  Form,
  TextInput,
  TextArea,
  Submit
} from "./styledFormComponents/StyledFormComponents";

const FormBody = styled(Form)`
  margin: auto;
  width: 100%;
  display: grid;
  grid-gap: 8px;

  @media (${props => props.theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const FirstNameInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const LastNameInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 2 / 3;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const EmailInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const PhoneInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 2 / 3;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const SubjectInput = styled(TextInput)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / span 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const MessageInput = styled(TextArea)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / span 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;
const SendButton = styled(Submit)`
  @media (${props => props.theme.media.mobile}) {
  }
  @media (${props => props.theme.media.tabletPortrait}) {
    grid-column: 1 / span 2;
  }
  @media (${props => props.theme.media.tabletLandscape}) {
  }
  @media (${props => props.theme.media.desktop}) {
  }
  @media (${props => props.theme.media.desktopLarge}) {
  }
`;

function ContactForm(props) {
  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName
  } = useInput("");
  const {
    value: lastName,
    bind: bindLastName,
    reset: resetLastName
  } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: phone, bind: bindPhone, reset: resetPhone } = useInput("");
  const { value: subject, bind: bindSubject, reset: resetSubject } = useInput(
    ""
  );
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  );

  const inputs = {
    firstName,
    lastName,
    email,
    phone,
    subject,
    message
  };
  const sendMessage = () => {
    axios
      .post("/send", inputs)
      .then(res => {
        if (res.data.status === "success") {
          alert(
            "Message Sent! Jasper will get back to you as soon as possible."
          );
        } else if (res.data.status === "fail") {
          alert("Message failed to send. Sorry for the inconvenience.");
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  const handleSubmit = e => {
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
      <FirstNameInput
        type="text"
        name="firstName"
        placeholder="First Name"
        {...bindFirstName}
        required
      />
      <LastNameInput
        type="text"
        name="lastName"
        placeholder="Last Name"
        {...bindLastName}
      />
      <EmailInput
        type="email"
        name="email"
        placeholder="Email Address"
        {...bindEmail}
        required
      />
      <PhoneInput
        type="phone"
        name="phone"
        placeholder="Phone"
        {...bindPhone}
      />
      <SubjectInput
        type="text"
        name="subject"
        placeholder="Subject"
        {...bindSubject}
        required
      />
      <MessageInput
        type="text"
        name="message"
        placeholder="Type your message here..."
        {...bindMessage}
        required
      />
      <SendButton type="submit">Submit</SendButton>
    </FormBody>
  );
}

export default ContactForm;
