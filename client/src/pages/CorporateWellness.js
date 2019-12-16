import React from "react";
import styled from "styled-components";
import { NavLink } from "../components/styledComponents/CustomStyledComponents";

const CorporateWellnessContainer = styled.div``;

const CorporateWellness = props => {
  return (
    <CorporateWellnessContainer>
      <h1>Corporate Wellness</h1>
      <p>
        Yoga and meditation are restorative, effective ways to reduce stress
        improve well being. Jasper Moon Wellness offers corporate yoga classes
        customized to suit the needs of your business. Get in touch today to
        learn more!
      </p>
      <NavLink to="/Contact">Contact</NavLink>
    </CorporateWellnessContainer>
  );
};

export default CorporateWellness;
