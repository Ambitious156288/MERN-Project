import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';

import { useDispatch } from 'react-redux';
import { getPosts } from 'actions/posts.action';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';

import Form from 'components/Form/Form';
import Posts from 'components/Posts/Posts';

const StyledFabButton = styled(Fab)`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1;
`;

const Root = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <GlobalStyle />

      <Container maxWidth="lg">
        <AppBar position="static">
          <Typography variant="h2" align="center">
            memorable events
          </Typography>

          <StyledFabButton color="secondary" aria-label="add">
            <AddIcon fontSize="large" color="primary" />
          </StyledFabButton>
        </AppBar>

        <Grow in>
          <Grid container spacing={3}>
            <Grid item justifyContent="space-between" alignItems="streched" spacing={3}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Grow>

        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Container>
    </>
  );
};

export default Root;
