import React, {useContext, useState} from 'react';
import {Button} from '../components/styledFormComponents/StyledFormComponents';
import styled from 'styled-components';
import {DataContext} from '../context/DataContextProvider';
import axios from 'axios';

import ProgressBar from './ProgressBar';

const FileUploaderWrapper = styled.div`
`;
const UploadedFileDisplay = styled.img`
  height: 200px;
  width: auto;
`;

export default function FileUploader(props) {
  const {} = useContext(DataContext);
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose file')
  const [uploadedFile, setUploadedFile] = useState({});
  const [uploadPercent, setUploadPercent] = useState(0);

  function onChange(e) {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  const handleFileUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercent(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
          setTimeout(() => setUploadPercent(0), 10000);
        }
      });

      const {fileName, filePath} = res.data;
      setUploadedFile({fileName, filePath});
    } catch(err) {
      if (err.response.status === 500) {
        console.log("there was an error with the server")
      } else {
        console.log(err.response.data.msg)
      }
    }
  };

  return (
    <FileUploaderWrapper>
      <label>{fileName}</label>
      <input type='file' onChange={onChange}/>
      <Button onClick={handleFileUpload}>Upload</Button>
      <ProgressBar percentage={uploadPercent} />
      {uploadedFile ? <UploadedFileDisplay src={uploadedFile.filePath} /> : null}
    </FileUploaderWrapper>
  );
};
