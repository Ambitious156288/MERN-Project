import React from 'react';

import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Form from 'components/Form/Form';
import Backdrop from '@material-ui/core/Backdrop';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // margin: '20px',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalForm = ({ open, handleClose, currentId, setCurrentId }) => {
  const classes = useStyles();

  return (
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
  );
};

export default ModalForm;
