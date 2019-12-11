import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {DataContext} from '../DataContextProvider';

function ProtectedRoute(props) {
  const {token} = useContext(DataContext)
  const {component: Component, ...rest} = props;

  return (
    token
      ?
      <Route {...rest} component={Component} />
      :
      <Redirect to="/login" />
  );
};

export default withContext(ProtectedRoute);
