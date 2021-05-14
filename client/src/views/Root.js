import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from 'theme/GlobalStyle';
import Home from 'components/Home/Home';
import LoginPage from 'views/LoginPage/Login';

const StyledContainer = styled(Container)`
  margin-bottom: 110px;
`;

const Root = () => (
  <>
    <GlobalStyle />

    <BrowserRouter>
      <StyledContainer maxWidth="lg">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={LoginPage} />
        </Switch>
      </StyledContainer>
    </BrowserRouter>
  </>
);

export default Root;
