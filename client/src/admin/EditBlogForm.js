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

export default function EditBlogForm(props) {
  const {addNewBlogPost, editBlogPost} = useContext(DataContext);
  const {value: title, bind: bindTitle} = useInput('');
  const {value: body, bind: bindBody} = useInput('');
  const {value: tags, bind: bindTags} = useInput('');
  const inputs = {title, body, tags};

  function handleSubmit(e) {
    e.preventDefault();
    if (props.type === "new") {
      addNewBlogPost(title, body, tags);
    } else {
      editBlogPost();
    };
  };

  return (
    props.type === "new"
    ?
    <FormWrapper onSubmit={handleSubmit}>
      <TextInput name="title" type="text" placeholder="Title" {...bindTitle} required />
      <TextArea name="body" placeholder="Body" {...bindBody} required />
      <TextInput name="tags" type="text" placeholder="Tags" {...bindTags} />
      <Submit>Add</Submit>
    </FormWrapper>
    :
    <FormWrapper onSubmit={handleSubmit}>
      <TextInput name="title" type="text" placeholder="Title" {...bindTitle} required />
      <TextArea name="body" placeholder="body" {...bindBody} required />
      <TextInput name="tags" type="text" placeholder="Tags" {...bindTags} />
      <Submit>Save</Submit>
    </FormWrapper>
  );
};