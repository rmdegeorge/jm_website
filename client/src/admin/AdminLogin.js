import React, {useContext} from 'react';
import styled from 'styled-components';

import {DataContext} from '../context/DataContextProvider';
import AdminLoginForm from './AdminLoginForm';

const AdminLoginWrapper = styled.div`

`;
const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100 0 400px 0;
`;


function AdminLogin(props) {
  const {token,user} = useContext(DataContext);
  return(
    <AdminLoginWrapper>
      {
        token
        ?
        <WelcomeMessage>
          <h2>Welcome!</h2>
          <p>You are currently logged in as {user.username}</p>
        </WelcomeMessage>
        :
        <AdminLoginForm />
      }

    </AdminLoginWrapper>
  );
};

export default AdminLogin;
