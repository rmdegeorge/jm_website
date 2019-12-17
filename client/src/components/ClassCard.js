import React, { useContext, useState } from "react";
import styled from "styled-components";

import { DataContext } from "../context/DataContextProvider";
import EditClassForm from "../admin/EditClassForm";
import { Button } from "../components/styledFormComponents/StyledFormComponents";
import DeleteConfirm from "../components/DeleteConfirm";

const ClassCardWrapper = styled.div`
  display: flex;
  padding: 16px 0 8px 0;
`;
const ClassTextWrapper = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
`;
const ClassName = styled.h3``;
const ClassDescription = styled.p``;
const ImgContainer = styled.div`
  width: auto;
  height: auto;
  max-width: 33%;
  max-height: 100%
  overflow: hidden;
  margin: auto;
`;
const ClassImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;
const EditButtonsWrapper = styled.div`
  display: flex;
`;
const EditFormWrapper = styled.div`
  width: 60%;
  margin: auto;
`;

export default function ClassCard(props) {
  const { token, deleteYogaClass } = useContext(DataContext);
  const [editToggled, setEditToggled] = useState(false);
  const [confirmDeleteToggled, setConfirmDeleteToggled] = useState(false);
  const { name, body, _id, imgSrc } = props.classInfo;
  const displayBody = body
    .filter(n => n)
    .map((paragraph, i) => (
      <ClassDescription key={`${_id}paragraph${i}`}>
        {paragraph}
      </ClassDescription>
    ));
  const toggleEdit = () => {
    setEditToggled(prevEditToggled => !prevEditToggled);
  };
  const toggleConfirmDelete = () => {
    setConfirmDeleteToggled(
      prevConfirmDeleteToggled => !prevConfirmDeleteToggled
    );
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
      <ClassTextWrapper>
        <ClassName>{name}</ClassName>
        {displayBody}
        {token ? (
          confirmDeleteToggled ? (
            <DeleteConfirm
              deleteItem={() => deleteYogaClass(props.classInfo._id)}
              toggleConfirmDelete={toggleConfirmDelete}
            />
          ) : (
            <EditButtonsWrapper>
              <Button onClick={toggleEdit}>Edit</Button>
              <Button onClick={toggleConfirmDelete}>Delete</Button>
            </EditButtonsWrapper>
          )
        ) : null}
      </ClassTextWrapper>
      <ImgContainer>
        <ClassImg src={imgSrc} />
      </ImgContainer>
    </ClassCardWrapper>
  );
}
