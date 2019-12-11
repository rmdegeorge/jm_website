import React from 'react';
import styled from 'styled-components';

import AdminLoginForm from './AdminLoginForm';

const AdminLoginWrapper = styled.div``;

function AdminLogin(props) {
  return(
    <AdminLoginWrapper>
      Admin Login Page
      <AdminLoginForm />
    </AdminLoginWrapper>
  );
};

export default AdminLogin;
