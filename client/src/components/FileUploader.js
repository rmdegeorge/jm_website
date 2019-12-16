import React, { useContext, useState } from "react";
import { Button } from "../components/styledFormComponents/StyledFormComponents";
import styled from "styled-components";
import { DataContext } from "../context/DataContextProvider";
import axios from "axios";

import ProgressBar from "./ProgressBar";

const FileUploaderWrapper = styled.div``;
const UploadedFileDisplay = styled.img`
  height: 200px;
  width: auto;
`;

export default function FileUploader(props) {
  const { uploadFile, uploadedFile, uploadPercent } = useContext(DataContext);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose file");

  function onChange(e) {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  const handleFileUpload = e => {
    e.preventDefault();

    uploadFile(file, fileName);
  };

  return (
    <FileUploaderWrapper>
      <label>{fileName}</label>
      <input type="file" onChange={onChange} />
      <Button onClick={handleFileUpload}>Upload</Button>
      {uploadedFile ? (
        <UploadedFileDisplay src={uploadedFile.filePath} />
      ) : null}
    </FileUploaderWrapper>
  );
}
