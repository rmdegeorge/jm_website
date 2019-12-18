import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle, { theme } from "./theme/GlobalStyle";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import CorporateWellness from "./pages/CorporateWellness";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./Admin";

const AppContainer = styled.div``;

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Classes" component={Classes} />
          <Route path="/CorporateWellness" component={CorporateWellness} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Store" component={Store} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default withRouter(App);
