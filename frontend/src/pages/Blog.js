import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`

`;

const Blog = (props) => {
  return (
    <BlogContainer>
      <p>{`Blog:`}</p>
      <p>{`>> example site: https://yogaphysics.com/yp/blog/`}</p>
      <br/>
      <p>{`Feed`}</p>
      <p>{`>> Background papar`}</p>
      <p>{`>>>> Cards (Can click title or <read more> link at text cutoff)`}</p>
      <p>{`>>>>>> Title `}</p>
      <p>{`>>>>>> Date Posted `}</p>
      <p>{`>>>>>> Photo? `}</p>
      <p>{`>>>>>> Text Preview `}</p>
      <br/>
      <p>{`Sidebar`}</p>
      <br/>
      <p>{`>> Search Bar`}</p>
      <br/>
      <p>{`>>>> Searches Post Titles and content for key words/tags`}</p>
      <br/>
      <p>{`>> Recent Posts`}</p>
      <br/>
      <p>{`>> Calendar Feed`}</p>
      <br/>
    </BlogContainer>
  )
}

export default Blog;
