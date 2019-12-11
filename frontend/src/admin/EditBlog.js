import React from 'react';
import styled from 'styled-components';

import Blog from '../pages/Blog';

const EditBlogWrapper = styled.div`
  display: flex;
  flex-direction: column;

`;
const BlogPagePreview = styled.div`
  width: 90%;
  border: 3px solid #000000;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;

  > :nth-child(2) {
    margin: 10px;
  }
`;
const BlogPagePreviewHeading = styled.div`
  width: 100%;
  background-color: ${props => props.theme.primary2}
  padding: 10px;
`;
const EditBlogForm = styled.div`
  width: 90%;
  margin: 0 auto 0 auto;
  padding: 10px;
  border: 3px solid #000000;
`;
function EditBlog(props) {
  return(
    <EditBlogWrapper>
      Edit Blog Page
      <EditBlogForm>
        Edit Blog Form Goes Here
      </EditBlogForm>
      <BlogPagePreview>
        <BlogPagePreviewHeading>
          <h2>Preview:</h2>
        </BlogPagePreviewHeading>
        <Blog />
      </BlogPagePreview>
    </EditBlogWrapper>
  );
};

export default EditBlog;
