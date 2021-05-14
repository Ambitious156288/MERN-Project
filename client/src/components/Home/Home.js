import React from 'react';
import Grow from '@material-ui/core/Grow';
import Posts from 'components/Posts/Posts';
import ModalForm from 'components/ModalForm/ModalForm';
import Navbar from 'components/Navbar/Navbar';
import useHome from './useHome.hook';

const Home = () => {
  const { currentId, setCurrentId, open, handleOpen, handleClose } = useHome();

  return (
    <>
      <Grow in>
        <Posts setCurrentId={setCurrentId} modalOpenFn={() => handleOpen()} />
      </Grow>

      <ModalForm
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
