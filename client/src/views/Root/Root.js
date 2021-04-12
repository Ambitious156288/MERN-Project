import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';

import { useDispatch } from 'react-redux';
import { getPosts } from 'actions/posts.action';

import Container from '@material-ui/core/Container';
import Grow from '@material-ui/core/Grow';
import Posts from 'components/Posts/Posts';
import ModalFrom from 'components/ModalForm/ModalForm';

import Navbar from 'components/Navbar/Navbar';

const StyledContainer = styled(Container)`
  margin-bottom: 110px;
`;

const Root = () => {
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

        <ModalFrom
          open={open}
          handleClose={handleClose}
          currentId={currentId}
          setCurrentId={setCurrentId}
        />
      </StyledContainer>

      <Navbar handleOpen={() => handleOpen()} />
    </>
  );
};

export default Root;
