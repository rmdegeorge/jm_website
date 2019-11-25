import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer = (props) => {
  return (
    <FooterContainer>
      Footer
    </FooterContainer>
  )
}

export default Footer;
