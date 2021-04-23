import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';

import Container from '@material-ui/core/Container';

import Home from 'components/Home/Home';
import LoginPage from 'views/LoginPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const StyledContainer = styled(Container)`
  margin-bottom: 110px;
`;

const Root = () => {
  return (
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
};

export default Root;
