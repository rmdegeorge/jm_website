import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export default function About(props) {
  return (
    <AboutWrapper>
      <h1>About Page Goes Here</h1>
      <p>
        About about about about about about about about about about about about
        about about about about about about about about about about about about
        about about about about about about
      </p>
    </AboutWrapper>
  );
}
