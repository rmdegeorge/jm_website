import { useState } from "react";

// export const useContactForm = (callback) => {
//   const [inputs, setInputs] = useState({});
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     callback();
//   };
//   const handleInputChange = (event) => {
//     event.persist();
//     setInputs((inputs) => ({
//       ...inputs,
//       [event.target.name]: event.target.value
//     }));
//   };
//
//   return {
//     handleSubmit,
//     handleInputChange,
//     inputs
//   };
// };

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};
