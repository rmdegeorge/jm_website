import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Classes from './pages/Classes';
import CorporateWellness from './pages/CorporateWellness';
import Contact from './pages/Contact';
import About from './pages/About';
import Instagram from './pages/Instagram';

const AppContainer = styled.div`

`;

const App = (props) => {
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Classes" component={Classes} />
        <Route path="/CorporateWellness" component={CorporateWellness} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Instagram" component={Instagram} />
      </Switch>
    </AppContainer>
  )
}

export default App;
