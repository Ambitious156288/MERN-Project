import React, { useState } from 'react';
import FileBase from 'react-file-base64';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { createPost } from 'actions/posts.action';

const Form = () => {
  const [postData, setPostData] = useState({ creator: '', title: '', description: '', tags: '' });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memorable Event</Typography>

        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={e => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={postData.description}
          onChange={e => setPostData({ ...postData, description: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          multiline
          rows={4}
          value={postData.tags}
          onChange={e => setPostData({ ...postData, tags: e.target.value })}
        />

        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
        />

        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>

        <Button variant="contained" color="secondary" size="small" ocClick={clear}>
          Clear
        </Button>
      </form>
    </>
  );
};

export default Form;
