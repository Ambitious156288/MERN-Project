import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FileBase from 'react-file-base64';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { createPost, updatePost } from 'actions/posts.action';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const StyledTextField = styled(TextField)`
  margin: 15px 0;
`;

const StyledForm = styled.form`
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin: 10px 0;
`;

const useStyles = makeStyles(() => ({
  formTextInput: {
    fontSize: 20,
  },
  formTextLabel: {
    fontSize: 20,
  },
}));

const Form = ({ currentId, setCurrentId, modalCloseFn }) => {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    description: '',
    tags: '',
    selectedFile: '',
  });

  const post = useSelector(state =>
    currentId ? state.posts.find(p => p._id === currentId) : null,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: '', title: '', description: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else dispatch(createPost(postData));

    clear();

    modalCloseFn();
  };

  return (
    <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Typography variant="h3">{currentId ? 'Editing' : 'Creating'} a Memorable Event</Typography>
      <br />
      <br />
      <StyledTextField
        InputProps={{
          classes: {
            input: classes.formTextInput,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.formTextLabel,
          },
        }}
        name="creator"
        label="Creator"
        fullWidth
        value={postData.creator}
        onChange={e => setPostData({ ...postData, creator: e.target.value })}
      />
      <StyledTextField
        InputProps={{
          classes: {
            input: classes.formTextInput,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.formTextLabel,
          },
        }}
        name="title"
        label="Title"
        fullWidth
        value={postData.title}
        onChange={e => setPostData({ ...postData, title: e.target.value })}
      />
      <StyledTextField
        InputProps={{
          classes: {
            input: classes.formTextInput,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.formTextLabel,
          },
        }}
        name="description"
        label="Description"
        fullWidth
        multiline
        value={postData.description}
        onChange={e => setPostData({ ...postData, description: e.target.value })}
      />

      <StyledTextField
        InputProps={{
          classes: {
            input: classes.formTextInput,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.formTextLabel,
          },
        }}
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
        size="large"
        fontSize="large"
        type="submit"
        fullWidth
      >
        Submit
      </StyledButton>

      <Button variant="contained" color="secondary" size="large" fontSize="large" onClick={clear}>
        Clear
      </Button>
    </StyledForm>
  );
};

Form.propTypes = {
  currentId: PropTypes.number.isRequired,
  setCurrentId: PropTypes.number.isRequired,
  modalCloseFn: PropTypes.func.isRequired,
};

export default Form;
