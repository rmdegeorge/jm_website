import React from "react";
import styled from "styled-components";
import { NavLink } from "../components/styledComponents/CustomStyledComponents";

import CorpImg from "../assets/photo-of-woman-doing-yoga-374104.jpg";

const CorporateWellnessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%
  margin: 25px auto 0 auto;
`;
const CorpYogaImg = styled.img`
  max-width: 100%;
  width: auto;
  height: auto;
`;
const CorpYogaImgWrapper = styled.div``;

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
      <CorpYogaImgWrapper>
        <CorpYogaImg src={CorpImg} />
      </CorpYogaImgWrapper>
    </CorporateWellnessContainer>
  );
};

export default CorporateWellness;
