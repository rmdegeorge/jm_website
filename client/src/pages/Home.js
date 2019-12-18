import React from "react";
import styled from "styled-components";

import jmwordmarkblk from "../assets/JM_wordmark_blk.png";
import sunriseimg from "../assets/Sunrise.png";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 750px;
  margin: 0 auto 0 auto;
`;
const WordMarkLogo = styled.img`
  width: auto;
  height: auto;
  max-width: 350px;
  margin: auto;
  position: relative;
  top: 0px;
  left: 50%;
  margin: 0 0 0 -175px;
  background-image: radial-gradient(farthest-side, #fafafa9f 50%, transparent);
`;
const LogoBackgroundGradient = styled.div``;
const BackgroundImg = styled.div`
  background: url(${sunriseimg}) no-repeat right -100px;
  width: 100%;
  height: 100%;
`;

const Home = props => {
  return (
    <HomeWrapper>
      <BackgroundImg>
        <WordMarkLogo src={jmwordmarkblk} alt="Jasper Moon Wellness Logo" />
      </BackgroundImg>
    </HomeWrapper>
  );
};

export default Home;
