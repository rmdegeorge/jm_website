import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {useInput} from '../hooks/customHooks';
import {DataContext} from '../context/DataContextProvider';

import {Form, TextInput, TextArea, Submit} from '../components/styledFormComponents/StyledFormComponents';

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%%
  margin: 0 auto 0 auto;
`;
const TitleInput = styled.input``;
const BodyInput = styled.textarea`

`;

export default function EditClassForm(props) {
  const {login} = useContext(DataContext);
  const {value: name, bind: bindName} = useInput('');
  const {value: body, bind: bindBody} = useInput('');
  const inputs = {name, body};

  function handleSubmit(e) {
    e.preventDefault();
    if (props.type === "new") {
      // add function
    } else {
      // save function
    }
  };

  return (
    props.type === "new"
    ?
    <FormWrapper onSubmit={handleSubmit}>
      <TextInput name="name" type="text" placeholder="Name" {...bindName} required />
      <TextArea name="body" placeholder="Body" {...bindBody} required />
      <Submit>Add</Submit>
    </FormWrapper>
    :
    <FormWrapper onSubmit={handleSubmit}>
      <TextInput name="name" type="text" placeholder="Name" {...bindName} required />
      <TextArea name="body" placeholder="body" {...bindBody} required />
      <Submit>Save</Submit>
    </FormWrapper>
  );
};