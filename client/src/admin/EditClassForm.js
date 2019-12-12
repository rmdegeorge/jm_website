import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {useInput} from '../hooks/customHooks';
import {DataContext} from '../context/DataContextProvider';

import {Form, TextInput, TextArea, Submit, Button} from '../components/styledFormComponents/StyledFormComponents';

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
  const {addNewYogaClass, editYogaClass} = useContext(DataContext);
  const {value: name, bind: bindName} = useInput('');
  const {value: body, bind: bindBody} = useInput('');
  const {value: tags, bind: bindTags} = useInput('');
  const inputs = {name, body, tags};

  const [selectedFile, setSelectedFile] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (props.type === "new") {
      addNewYogaClass(name, body, tags);
    } else {
      editYogaClass();
    };
  };

  function handleFileSelected(e) {
    setSelectedFile(e.target.files[0]);
  }
  function handleFileUpload() {

  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextInput name="name" type="text" placeholder="Name" {...bindName} required />
      <TextArea name="body" placeholder="Body" {...bindBody} required />
      <TextInput name="tags" placeholder="Tags" {...bindTags} />
      <input type="file" onChange={handleFileSelected} /><Button onClick={handleFileUpload}>Upload File</Button>
      {props.type === "new" ? <Submit type="submit">Add</Submit> : <Submit>Save</Submit>}
    </FormWrapper>
  );
};
