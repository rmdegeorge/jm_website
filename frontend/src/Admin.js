import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import AdminLogin from './admin/AdminLogin';

const AdminWrapper = styled.div``;

function Admin(props) {
  return(
    <AdminWrapper>
      <AdminLogin />
    </AdminWrapper>
  )
}

export default Admin;
