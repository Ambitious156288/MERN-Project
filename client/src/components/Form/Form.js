import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FileBase from 'react-file-base64';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { createPost, updatePost } from 'actions/posts.action';
import { useSelector } from 'react-redux';

import { user } from 'constants/userConstant';

import QuitIcon from 'utils/svg/QuitIcon';

import { useForm } from 'react-hook-form';
import ErrorMessage from './errorMessage';

const StyledTextField = styled(TextField)`
  margin: 15px 0;
`;

const StyledForm = styled.form`
  position: relative;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin: 10px 0;
`;

const StyledDiv = styled.div`
  position: absolute;
  right: -44px;
  top: -47px;
  text-align: right;
`;

const Form = ({ currentId, setCurrentId, modalCloseFn }) => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

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

  // const handleSubmit = e => {
  // e.preventDefault();

  // if (currentId === 0) dispatch(createPost({ ...postData, name: user?.result?.name }));
  // else dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));

  // clear();

  // modalCloseFn();
  // };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <StyledDiv>
        <Button onClick={modalCloseFn}>
          <QuitIcon />
        </Button>
      </StyledDiv>

      <br />
      <Typography variant="h5">{currentId ? 'Editing' : 'Creating'} a Memorable Event</Typography>
      <br />
      <br />

      <StyledTextField
        name="title"
        label="Title"
        fullWidth
        value={postData.title}
        onChange={e => setPostData({ ...postData, title: e.target.value })}
        inputRef={register({ required: true, minLength: 3 })}
      />
      <ErrorMessage error={errors.title} />

      <StyledTextField
        name="description"
        label="Description"
        fullWidth
        multiline
        value={postData.description}
        onChange={e => setPostData({ ...postData, description: e.target.value })}
        inputRef={register({ required: true, minLength: 7 })}
      />
      <ErrorMessage error={errors.description} />

      <StyledTextField
        name="tags"
        label="Tags"
        fullWidth
        multiline
        value={postData.tags}
        onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })}
        inputRef={register({ required: true, minLength: 3 })}
      />
      <ErrorMessage error={errors.tags} />

      <br />
      <br />

      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
      />

      <br />
      <br />

      <StyledButton
        variant="contained"
        color="primary"
        size="medium"
        fontSize="medium"
        type="submit"
        fullWidth
      >
        Submit
      </StyledButton>
      <br />
      <br />
      <Button variant="contained" color="secondary" size="medium" fontSize="medium" onClick={clear}>
        Clear
      </Button>
    </StyledForm>
  );
};

Form.propTypes = {
  currentId: PropTypes.any.isRequired,
  setCurrentId: PropTypes.func.isRequired,
  modalCloseFn: PropTypes.func.isRequired,
};

export default Form;
