import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { DataContext } from "../context/DataContextProvider";
import ClassCard from "../components/ClassCard";
import EditClassForm from "../admin/EditClassForm";

const ClassesWrapper = styled.div`
  width: 90%;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PageTitle = styled.h1``;
const PageSubtitle = styled.h2``;
const EditFormWrapper = styled.div`
  width: 80%;
  margin: 0 auto 0 auto;
`;

const Classes = props => {
  const { yogaClasses, getAllYogaClasses, token } = useContext(DataContext);

  useEffect(() => {
    getAllYogaClasses();
  }, []);
  const displayYogaClasses = yogaClasses.map(yogaClass => (
    <ClassCard key={yogaClass._id} classInfo={yogaClass} />
  ));

  return (
    <ClassesWrapper>
      {token ? (
        <EditFormWrapper>
          <EditClassForm type="new" />
        </EditFormWrapper>
      ) : null}
      <PageTitle>Class Offerings</PageTitle>
      <PageSubtitle>Designed For You</PageSubtitle>
      {displayYogaClasses}
    </ClassesWrapper>
  );
};

export default Classes;
