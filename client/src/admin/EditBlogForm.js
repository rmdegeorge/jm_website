import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/customHooks";
import { DataContext } from "../context/DataContextProvider";

import FileUploader from "../components/FileUploader";
import {
  Form,
  TextInput,
  TextArea,
  Submit
} from "../components/styledFormComponents/StyledFormComponents";

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%%
  margin: 0 auto 0 auto;
`;

export default function EditBlogForm(props) {
  const {
    addNewBlogPost,
    editBlogPost,
    uploadedFile,
    setUploadedFile
  } = useContext(DataContext);

  const { value: title, bind: bindTitle, setValue: setTitle } = useInput("");
  const { value: body, bind: bindBody, setValue: setBody } = useInput("");
  const { value: tags, bind: bindTags, setValue: setTags } = useInput("");

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (props.type === "edit") {
      setTitle(props.postInfo.title);
      setBody(props.postInfo.body.join("\n"));
      setTags(props.postInfo.tags.join(", "));
    }
  }, []);

  const imgSrc = uploadedFile.filePath;

  function handleSubmit(e) {
    e.preventDefault();
    if (props.type === "add") {
      addNewBlogPost(title, body, tags, imgSrc);
    } else {
      editBlogPost(props.postInfo._id, title, body, tags, imgSrc);
      props.toggleEdit();
    }
    setUploadedFile("");
    setSelectedFile("");
    setTitle("");
    setBody("");
    setTags("");
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextInput
        name="title"
        type="text"
        placeholder="Title"
        {...bindTitle}
        required
      />
      <TextArea name="body" placeholder="Body" {...bindBody} required />
      <TextInput name="tags" type="text" placeholder="Tags" {...bindTags} />
      <FileUploader />
      {props.type === "new" ? <Submit>Add</Submit> : <Submit>Save</Submit>}
    </FormWrapper>
  );
}
