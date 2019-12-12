import React from 'react';
import styled from 'styled-components';

import EditClassForm from './EditClassForm'
import Classes from '../pages/Classes';

const EditClassWrapper = styled.div`
  display: flex;
  flex-direction: column;

`;
const ClassesPagePreview = styled.div`
  width: 90%;
  border: 3px solid #000000;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;

  > :nth-child(2) {
    margin: 10px;
  }
`;
const ClassesPagePreviewHeading = styled.div`
  width: 100%;
  background-color: ${props => props.theme.primary2}
  padding: 10px;
`;
const EditClassFormWrapper = styled.div`
  width: 90%;
  margin: 0 auto 0 auto;
  padding: 10px;
  border: 3px solid #000000;
`;
function EditClasses(props) {
  return(
    <EditClassWrapper>
      <EditClassFormWrapper>
        <h2>Add New Class</h2>
        <EditClassForm type="new" />
      </EditClassFormWrapper>
      <ClassesPagePreview>
        <ClassesPagePreviewHeading>
          <h2>Preview:</h2>
        </ClassesPagePreviewHeading>
        <Classes />
      </ClassesPagePreview>
    </EditClassWrapper>
  );
};

export default EditClasses;
