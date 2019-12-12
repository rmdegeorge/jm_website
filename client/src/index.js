import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import DataContextProvider from './context/DataContextProvider';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
