import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getAll } from 'actions/posts.action';

const useHome = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, [currentId, dispatch]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return { currentId, setCurrentId, open, handleOpen, handleClose };
};

export default useHome;
