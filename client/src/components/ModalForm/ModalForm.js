import React from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Form from 'components/Form/Form';
import Backdrop from '@material-ui/core/Backdrop';
import useStyles from './ModalForm.styles';

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
