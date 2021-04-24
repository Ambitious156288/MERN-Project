import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

const TransitionRight = props => {
  return <Slide {...props} direction="left" />;
};

const SnackbarAlert = ({ loginMessage }) => {
  const [open, setOpen] = React.useState(true);
  const transition = TransitionRight;

  const handleClose = () => {
    setOpen(false);
  };

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

SnackbarAlert.propTypes = {
  loginMessage: PropTypes.string.isRequired,
};

export default SnackbarAlert;
