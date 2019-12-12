import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {DataContext} from '../context/DataContextProvider';
import EditClassForm from '../admin/EditClassForm';

const ClassesWrapper = styled.div`
  width: 90%;
  margin: 0 auto 0 auto;
`;
const PageTitle = styled.h1``;
const PageSubtitle = styled.h2``;
const ClassCard = styled.div``;
const ClassTitle = styled.h3``;
const ClassDescription = styled.p``;
const EditFormWrapper = styled.div`
  width: 80%;
  margin: 0 auto 0 auto;
`;

const Classes = (props) => {
  const {yogaClasses, getAllYogaClasses, token} = useContext(DataContext);

  useEffect(() => {
    getAllYogaClasses();
  }, []);

  const displayYogaClasses = yogaClasses.map((yogaClass) =>
    <ClassCard key={yogaClass._id}>
      <ClassTitle>
        {yogaClass.name}
      </ClassTitle>
        {yogaClass.body.map((paragraph, i) =>
          <ClassDescription key={yogaClass._id + "paragraph" + i}>
            {paragraph}
          </ClassDescription>
        )}
    </ClassCard>
  )
  return (
    <ClassesWrapper>
      {
        token
        ?
        <EditFormWrapper>
          <EditClassForm type="new" />
        </EditFormWrapper>
        :
        null
      }
      <PageTitle>Class Offerings</PageTitle>
      <PageSubtitle>Designed For You</PageSubtitle>
      {displayYogaClasses}
    </ClassesWrapper>
  )
}

export default Classes;
