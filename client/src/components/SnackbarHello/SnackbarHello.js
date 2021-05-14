import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

const TransitionRight = props => {
  return <Slide {...props} direction="left" />;
};

const SnackbarAlert = ({ loginMessage }) => {
  const [open, setOpen] = useState(true);
  const transition = TransitionRight;

  const handleClose = () => setOpen(false);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        TransitionComponent={transition}
        message={loginMessage}
      ></Snackbar>
    </>
  );
};

export default SnackbarAlert;
