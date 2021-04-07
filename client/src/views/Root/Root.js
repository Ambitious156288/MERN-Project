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

import Form from 'components/Form/Form';
import Posts from 'components/Posts/Posts';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const StyledTypography = styled(Typography)`
  letter-spacing: 2px;
`;

const StyledContainer = styled(Container)`
  margin-bottom: 110px;
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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Root = () => {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GlobalStyle />

      <StyledContainer maxWidth="lg">
        <Grow in>
          <Posts setCurrentId={setCurrentId} modalOpenFn={() => handleOpen()} />
        </Grow>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Form
                currentId={currentId}
                setCurrentId={setCurrentId}
                modalCloseFn={() => handleClose()}
              />
            </div>
          </Fade>
        </Modal>
      </StyledContainer>

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon type="button" onClick={handleOpen} fontSize="large" color="primary" />
          </Fab>
          <StyledTypography variant="h2">memorable events</StyledTypography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Root;
