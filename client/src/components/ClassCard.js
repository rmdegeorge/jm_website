import React from 'react';
import styled from 'styled-components';

const ClassCardWrapper = styled.div``;
const ClassName = styled.h3``;
const ClassDescription = styled.p``;
const ClassImg = styled.img``;

export default function ClassCard(props) {
  const {name, body, _id} = props.classInfo;
  const displayBody = body.map((paragraph, i) => 
    <ClassDescription key={`${_id}paragraph${i}`}>
      {paragraph}
    </ClassDescription>
  );

  return (
    <ClassCardWrapper>
      <ClassName>{name}</ClassName>
      {displayBody}
    </ClassCardWrapper>
  );
};

