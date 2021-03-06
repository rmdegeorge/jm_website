import React, { useContext } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/customHooks";
import { DataContext } from "../context/DataContextProvider";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%
  margin: 5vh auto 0 auto;
`;

export default function AdminLoginForm(props) {
  const { login } = useContext(DataContext);
  const { value: username, bind: bindUsername } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  function handleLoginSubmit(e) {
    e.preventDefault();
    login(username, password);
  }
  return (
    <FormWrapper onSubmit={handleLoginSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Username"
        {...bindUsername}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        {...bindPassword}
        required
      />
      <button>Submit</button>
    </FormWrapper>
  );
}
