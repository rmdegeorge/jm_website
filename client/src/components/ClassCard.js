import React, { useContext, useState } from "react";
import styled from "styled-components";

import { DataContext } from "../context/DataContextProvider";
import EditClassForm from "../admin/EditClassForm";
import { Button } from "../components/styledFormComponents/StyledFormComponents";

const ClassCardWrapper = styled.div``;
const ClassName = styled.h3``;
const ClassDescription = styled.p``;
const ClassImg = styled.img``;
const EditFormWrapper = styled.div`
  width: 60%;
  margin: auto;
`;

export default function ClassCard(props) {
  const { token } = useContext(DataContext);
  const [editToggled, setEditToggled] = useState(false);
  const { name, body, _id } = props.classInfo;
  const displayBody = body.map((paragraph, i) => (
    <ClassDescription key={`${_id}paragraph${i}`}>{paragraph}</ClassDescription>
  ));
  const toggleEdit = () => {
    setEditToggled(prevEditToggled => !prevEditToggled);
  };
  return editToggled ? (
    <EditFormWrapper>
      <EditClassForm
        type="edit"
        classInfo={props.classInfo}
        toggleEdit={toggleEdit}
      />
    </EditFormWrapper>
  ) : (
    <ClassCardWrapper>
      <ClassName>{name}</ClassName>
      {displayBody}
      {token ? <Button onClick={toggleEdit}>Edit</Button> : null}
    </ClassCardWrapper>
  );
}
