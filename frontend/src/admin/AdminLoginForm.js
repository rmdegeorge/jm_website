import React, {useState} from 'react';
import styled from 'styled-components';
import {useInput} from '../hooks/customHooks';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%
  margin: 5vh auto 0 auto;
`;

export default function AdminLoginForm(props) {
  const {value: username, bind: bindUsername, reset: resetUsername} = useInput('');
  const {value: password, bind: bindPassword, reset: resetPassword} = useInput('');
  const inputs = {username, password};

  function handleLoginSubmit(e) {
    e.preventDefault();
    // do the thing, verify the creds
    resetUsername();
    resetPassword();
  }
  return (
    <FormWrapper onSubmit={handleLoginSubmit}>
      <input name="username" type="text" placeholder="Username" {...bindUsername} required />
      <input name="password" type="password" placeholder="Password" {...bindPassword} required />
      <button>Submit</button>
    </FormWrapper>
  );
};
