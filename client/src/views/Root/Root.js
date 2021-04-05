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

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const StyledTypography = styled(Typography)`
  letter-spacing: 2px;
`;

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -40,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const Root = () => {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <GlobalStyle />

      <Container maxWidth="lg">
        <Grow in>
          <Posts setCurrentId={setCurrentId} />
        </Grow>

        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Container>

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon fontSize="large" color="primary" />
          </Fab>
          <StyledTypography variant="h2">memorable events</StyledTypography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Root;
