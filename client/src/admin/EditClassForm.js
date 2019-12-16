import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/customHooks";
import { DataContext } from "../context/DataContextProvider";

import {
  Form,
  TextInput,
  TextArea,
  Submit,
  Button
} from "../components/styledFormComponents/StyledFormComponents";

import FileUploader from "../components/FileUploader";

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%%
  margin: 0 auto 0 auto;
`;
const TitleInput = styled.input``;
const BodyInput = styled.textarea``;

export default function EditClassForm(props) {
  const {
    addNewYogaClass,
    editYogaClass,
    deleteYogaClass,
    uploadedFile
  } = useContext(DataContext);
  const { value: name, bind: bindName, setValue: setName } = useInput("");
  const { value: body, bind: bindBody, setValue: setBody } = useInput("");
  const inputs = { name, body };

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (props.type === "edit") {
      setName(props.classInfo.name);
      setBody(props.classInfo.body.join("\n"));
    }
  }, []);

  const imgSrc = uploadedFile.filePath;

  function handleSubmit(e) {
    e.preventDefault();
    if (props.type === "new") {
      addNewYogaClass(name, body, imgSrc);
    } else {
      editYogaClass(props.classInfo._id, name, body, imgSrc);
      props.toggleEdit();
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextInput
        name="name"
        type="text"
        placeholder="Name"
        {...bindName}
        required
      />
      <TextArea name="body" placeholder="Body" {...bindBody} required />
      <FileUploader />
      {props.type === "new" ? (
        <Submit type="submit">Add</Submit>
      ) : (
        <Submit>Save</Submit>
      )}
    </FormWrapper>
  );
}
