import React, { useContext, useState } from "react";
import styled from "styled-components";

import { DataContext } from "../context/DataContextProvider";
import EditBlogForm from "../admin/EditBlogForm";
import { Button } from "../components/styledFormComponents/StyledFormComponents";
import DeleteConfirm from "../components/DeleteConfirm";

const BlogPostCardWrapper = styled.div``;
const BlogPostImg = styled.img``;
const BlogPostTitle = styled.h2``;
const BlogPostDate = styled.h4``;
const BlogPostBodyWrapper = styled.div``;
const BlogPostBody = styled.p``;
const BlogPostTagsWrapper = styled.div`
  display: inline-flex;
`;
const BlogPostTag = styled.div`
  padding: 5px;
  margin: 0 2px 0 2px;
  border-radius: 15px;
  background-color: #000000;
  color: #fafafa;
`;
const EditButtonsWrapper = styled.div`
  display: flex;
`;
const EditFormWrapper = styled.div`
  width: 60%;
  margin: auto;
`;

export default function BlogPostCard(props) {
  const { formatDate, token, deleteBlogPost } = useContext(DataContext);
  const [editToggled, setEditToggled] = useState(false);
  const [confirmDeleteToggled, setConfirmDeleteToggled] = useState(false);
  const { title, date, body, tags, _id, imgSrc } = props.postInfo;
  const displayBody = body
    .filter(n => n)
    .map((paragraph, i) => (
      <BlogPostBody key={`${_id}paragraph${i}`}>{paragraph}</BlogPostBody>
    ));
  const displayTags = tags
    .filter(n => n)
    .map((tag, i) => <BlogPostTag key={`${_id}tag${i}`}>{tag}</BlogPostTag>);
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
      <EditBlogForm
        type="edit"
        postInfo={props.postInfo}
        toggleEdit={toggleEdit}
      />
    </EditFormWrapper>
  ) : (
    <BlogPostCardWrapper>
      <BlogPostImg src={imgSrc} />
      <BlogPostTitle>{title}</BlogPostTitle>
      <BlogPostDate>{formatDate(date)}</BlogPostDate>
      <BlogPostBodyWrapper>{displayBody}</BlogPostBodyWrapper>
      <BlogPostTagsWrapper>{displayTags}</BlogPostTagsWrapper>
      {token ? (
        confirmDeleteToggled ? (
          <DeleteConfirm
            deleteItem={() => deleteBlogPost(props.postInfo._id)}
            toggleConfirmDelete={toggleConfirmDelete}
          />
        ) : (
          <EditButtonsWrapper>
            <Button onClick={toggleEdit}>Edit</Button>
            <Button onClick={toggleConfirmDelete}>Delete</Button>
          </EditButtonsWrapper>
        )
      ) : null}
    </BlogPostCardWrapper>
  );
}
