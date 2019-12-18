import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { DataContext } from "../context/DataContextProvider";

import EditBlogForm from "../admin/EditBlogForm";
import BlogPostCard from "../components/BlogPostCard";

const BlogWrapper = styled.div`
  width: 90%;
  margin: 0 auto 0 auto;
`;

const EditFormWrapper = styled.div`
  width: 80%;
  margin: 0 auto 0 auto;
`;

const Blog = props => {
  const { blogPosts, getAllBlogPosts, token } = useContext(DataContext);

  useEffect(() => {
    getAllBlogPosts();
  }, []);

  const displayBlogPosts = blogPosts.map(blogPost => (
    <BlogPostCard key={blogPost._id} postInfo={blogPost} />
  ));

  return (
    <BlogWrapper>
      {token ? (
        <EditFormWrapper>
          <EditBlogForm type="add" />
        </EditFormWrapper>
      ) : null}

      {displayBlogPosts}

      {/* <div>
        <h3>TO DO:</h3>
        <p>{`Blog:`}</p>
        <p>{`>> example site: https://yogaphysics.com/yp/blog/`}</p>
        <br />
        <p>{`Feed`}</p>
        <p>{`>> Background paper`}</p>
        <p>{`>>>> Cards (Can click title or <read more> link at text cutoff)`}</p>
        <p>{`>>>>>> Title `}</p>
        <p>{`>>>>>> Date Posted `}</p>
        <p>{`>>>>>> Photo? `}</p>
        <p>{`>>>>>> Text Preview `}</p>
        <br />
        <p>{`Sidebar`}</p>
        <br />
        <p>{`>> Search Bar`}</p>
        <br />
        <p>{`>>>> Searches Post Titles and content for key words/tags`}</p>
        <br />
        <p>{`>> Recent Posts`}</p>
        <br />
        <p>{`>> Calendar Feed`}</p>
        <br />
      </div> */}
    </BlogWrapper>
  );
};

export default Blog;
