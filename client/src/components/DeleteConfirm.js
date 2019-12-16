import React from "react";
import styled from "styled-components";
import { Button } from "./styledFormComponents/StyledFormComponents";

const DeleteConfirmWrapper = styled.div``;
const Header = styled.h1`
  color: red;
  font-weight: bold;
`;
const Message = styled.p``;

export default function DeleteConfirm(props) {
  return (
    <DeleteConfirmWrapper>
      <Header>WARNING!</Header>
      <Message>
        Are you sure you want to delete this item? You cannot undo this action!
      </Message>
      <Button onClick={props.toggleConfirmDelete}>No, Go Back</Button>
      <Button onClick={props.deleteYogaClass}>Yes, Delete</Button>
    </DeleteConfirmWrapper>
  );
}
