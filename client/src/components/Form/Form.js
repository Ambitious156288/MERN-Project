import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FileBase from 'react-file-base64';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { createPost, updatePost } from 'actions/posts.action';
import { useSelector } from 'react-redux';

import { user } from 'constants/userConstant';

const StyledTextField = styled(TextField)`
  margin: 15px 0;
`;

const StyledForm = styled.form`
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin: 10px 0;
`;

const Form = ({ currentId, setCurrentId, modalCloseFn }) => {
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
    setCurrentId(null);
    setPostData({ title: '', description: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user.result.name }));
    } else dispatch(createPost({ ...postData, name: user.result.name }));

    clear();

    modalCloseFn();
  };

  return (
    <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Typography variant="h3">{currentId ? 'Editing' : 'Creating'} a Memorable Event</Typography>
      <br />
      <br />
      <StyledTextField
        name="title"
        label="Title"
        fullWidth
        value={postData.title}
        onChange={e => setPostData({ ...postData, title: e.target.value })}
      />
      <StyledTextField
        name="description"
        label="Description"
        fullWidth
        multiline
        value={postData.description}
        onChange={e => setPostData({ ...postData, description: e.target.value })}
      />

      <StyledTextField
        name="tags"
        label="Tags"
        fullWidth
        multiline
        value={postData.tags}
        onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })}
      />

      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
      />

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

      <Button variant="contained" color="secondary" size="medium" fontSize="medium" onClick={clear}>
        Clear
      </Button>
    </StyledForm>
  );
};

export default Form;
