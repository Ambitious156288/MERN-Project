import React from 'react';
import FileBase from 'react-file-base64';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import QuitIcon from 'utils/svg/QuitIcon';

import { StyledTextField, StyledForm, StyledButton, StyledDiv } from './Form.styles';
import useForm from './useForm.hook';

const Form = ({ currentId, setCurrentId, modalCloseFn }) => {
  const { postData, setPostData, clear, handleSubmit } = useForm({
    currentId,
    setCurrentId,
    modalCloseFn,
  });

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
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

export default Form;
