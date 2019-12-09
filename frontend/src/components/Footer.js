import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100px;
  padding: 16px
`;

const Footer = (props) => {
  return (
    <FooterContainer>
      ©2019 by Jasper Moon Wellness
    </FooterContainer>
  )
}

export default Footer;
