import React, { useContext, useState } from "react";
import styled from "styled-components";

import { DataContext } from "../context/DataContextProvider";
import EditBlogForm from "../admin/EditBlogForm";
import { Button } from "../components/styledFormComponents/StyledFormComponents";

const BlogPostCardWrapper = styled.div``;
const BlogPostTitle = styled.h2``;
const BlogPostDate = styled.h4``;
const BlogPostBodyWrapper = styled.div``;
const BlogPostBody = styled.p``;
const BlogPostTagsWrapper = styled.div``;
const BlogPostTag = styled.div`
  padding: 5px;
  margin: 0 2px 0 2px;
  border-radius: 15px;
  background-color: #000000;
  color: #fafafa;
`;
const EditFormWrapper = styled.div`
  width: 60%;
  margin: auto;
`;

export default function BlogPostCard(props) {
  const { formatDate, token } = useContext(DataContext);
  const [editToggled, setEditToggled] = useState(false);
  const { title, date, body, tags, _id } = props.postInfo;
  const displayBody = body.map((paragraph, i) => (
    <BlogPostBody key={`${_id}paragraph${i}`}>{paragraph}</BlogPostBody>
  ));
  const displayTags = tags.map((tag, i) => (
    <BlogPostTag key={`${_id}tag${i}`}>{tag}</BlogPostTag>
  ));
  const toggleEdit = () => {
    console.log(setEditToggled);
    setEditToggled(prevEditToggled => !prevEditToggled);
  };

  return editToggled ? (
    <EditFormWrapper>
      <EditBlogForm type="edit" currentInfo={props.postInfo} />
    </EditFormWrapper>
  ) : (
    <BlogPostCardWrapper>
      <BlogPostTitle>{title}</BlogPostTitle>
      <BlogPostDate>{formatDate(date)}</BlogPostDate>
      <BlogPostBodyWrapper>{displayBody}</BlogPostBodyWrapper>
      <BlogPostTagsWrapper>{displayTags}</BlogPostTagsWrapper>
      {token ? <Button onClick={toggleEdit}>Edit</Button> : null}
    </BlogPostCardWrapper>
  );
}
