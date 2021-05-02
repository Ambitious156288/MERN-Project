import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getPosts } from 'actions/posts.action';

import Grow from '@material-ui/core/Grow';
import Posts from 'components/Posts/Posts';
import ModalFrom from 'components/ModalForm/ModalForm';
import Navbar from 'components/Navbar/Navbar';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const [open, setOpen] = useState(false);
  // const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grow in>
        <Posts setCurrentId={setCurrentId} modalOpenFn={() => handleOpen()} />
      </Grow>

      <ModalFrom
        open={open}
        handleClose={handleClose}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />

      <Navbar handleOpen={handleOpen} />
    </>
  );
};

export default Home;
