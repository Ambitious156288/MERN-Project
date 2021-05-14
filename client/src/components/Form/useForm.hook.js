import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { create, update } from 'actions/posts.action';
import { useSelector } from 'react-redux';

const useForm = ({ currentId, setCurrentId, modalCloseFn }) => {
  const user = useSelector(({ auth }) => auth.user);

  const [postData, setPostData] = useState({
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
  });

  const dispatch = useDispatch();

  const post = useSelector(state =>
    currentId ? state.posts.find(p => p._id === currentId) : null,
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', description: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (currentId === 0) dispatch(create({ ...postData, name: user?.result?.name }));
    else dispatch(update(currentId, { ...postData, name: user?.result?.name }));

    clear();

    modalCloseFn();
  };

  return { postData, clear, handleSubmit };
};

export default useForm;
