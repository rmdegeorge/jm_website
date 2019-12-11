import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {DataContext} from '../context/DataContextProvider';

const ClassesWrapper = styled.div`
  width: 90%;
  margin: 0 auto 0 auto;
`;
const PageTitle = styled.h1``;
const PageSubtitle = styled.h2``;
const ClassCard = styled.div``;
const ClassTitle = styled.h3``;
const ClassDescription = styled.p``;

const Classes = (props) => {
  const {yogaClasses, getAllYogaClasses} = useContext(DataContext);

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
      <PageTitle>Class Offerings</PageTitle>
      <PageSubtitle>Designed For You</PageSubtitle>
      {displayYogaClasses}
    </ClassesWrapper>
  )
}

export default Classes;
