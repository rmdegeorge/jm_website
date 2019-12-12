import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {DataContext} from '../context/DataContextProvider';

function ProtectedRoute(props) {
  const {token} = useContext(DataContext)
  const {component: Component, ...rest} = props;

  return (
    token
      ?
      <Route {...rest} component={Component} />
      :
      <Redirect to="/admin" />
  );
};

export default ProtectedRoute;
