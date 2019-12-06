import React from 'react';
import styled from 'styled-components';

const StoreContainer = styled.div`

`;

const Store = (props) => {
  return (
    <StoreContainer>
      Store
      Learn Shopify
      <br/>
      <a href="https://developers.shopify.com/tutorials/build-a-shopify-app-with-node-and-react">https://developers.shopify.com/tutorials/build-a-shopify-app-with-node-and-react</a>
      <br/>
      <br/>
      or learn Stripe
      <br/>
      <a href="https://stripe.com/docs/recipes/elements-react">https://stripe.com/docs/recipes/elements-react</a>
    </StoreContainer>
  );
};

export default Store;
