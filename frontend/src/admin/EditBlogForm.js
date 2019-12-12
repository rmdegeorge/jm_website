import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {useInput} from '../hooks/customHooks';
import {DataContext} from '../context/DataContextProvider';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%%
  margin: 0 auto 0 auto;
`;
const TitleInput = styled.input``;
const BodyInput = styled.textarea``;

export default function EditBlogForm(props) {
  const {login} = useContext(DataContext);
  const {value: title, bind: bindTitle} = useInput('');
  const {value: body, bind: bindBody} = useInput('');
  const inputs = {title, body};

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
      <TitleInput name="title" type="text" placeholder="Title" {...bindTitle} required />
      <BodyInput name="body" placeholder="Body" {...bindBody} required />
      <button>Add</button>
    </FormWrapper>
    :
    <FormWrapper onSubmit={handleSubmit}>
      <TitleInput name="title" type="text" placeholder="Title" {...bindTitle} required />
      <BodyInput name="body" placeholder="body" {...bindBody} required />
      <button>Save</button>
    </FormWrapper>
  );
};
