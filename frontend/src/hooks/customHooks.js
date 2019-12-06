import React from 'react';
import {useState} from 'react';

const useContactForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };
  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleChange,
    inputs
  };
};

export default useContactForm;
