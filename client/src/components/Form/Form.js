// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import FileBase from 'react-file-base64';

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// import { useDispatch } from 'react-redux';
// import { create, update } from 'actions/posts.action';
// import { useSelector } from 'react-redux';

// import { user } from 'constants/userConstant';

// import QuitIcon from 'utils/svg/QuitIcon';

// import { useForm } from 'react-hook-form';
// import ErrorMessage from './errorMessage';

// const StyledTextField = styled(TextField)`
//   margin: 15px 0;
// `;

// const StyledForm = styled.form`
//   position: relative;
//   text-align: center;
// `;

// const StyledButton = styled(Button)`
//   margin: 10px 0;
// `;

// const StyledDiv = styled.div`
//   position: absolute;
//   right: -44px;
//   top: -47px;
//   text-align: right;
// `;

// // Form.hook.js
// const usePostForm = ({ currentId, setCurrentId, modalCloseFn }) => {
//   const [postData, setPostData] = useState({
//     title: '',
//     description: '',
//     tags: '',
//     selectedFile: '',
//   });

//   const dispatch = useDispatch();

//   const post = useSelector(state =>
//     currentId ? state.posts.find(p => p._id === currentId) : null,
//   );

//   useEffect(() => {
//     if (post) setPostData(post);
//   }, [post]);

//   const clear = () => {
//     setCurrentId(0);
//     setPostData({ title: '', description: '', tags: '', selectedFile: '' });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     // validacja

//     if (currentId === 0) dispatch(create({ ...postData, name: user?.result?.name }));
//     else dispatch(update(currentId, { ...postData, name: user?.result?.name }));

//     clear();

//     modalCloseFn();
//   };

//   return {
//     currentId,
//     setCurrentId,
//     modalCloseFn,
//     postData,
//     setPostData,
//     clear,
//     handleSubmit,
//   };
// };

// // Form.component.js

// const FormView = ({ currentId, modalCloseFn, postData, setPostData, clear, onSubmitFn }) => (
//   <StyledForm autoComplete="off" onSubmit={onSubmitFn}>
//     <StyledDiv>
//       <Button onClick={modalCloseFn}>
//         <QuitIcon />
//       </Button>
//     </StyledDiv>

//     <br />
//     <Typography variant="h5">{currentId ? 'Editing' : 'Creating'} a Memorable Event</Typography>
//     <br />
//     <br />

//     <StyledTextField
//       name="title"
//       label="Title"
//       fullWidth
//       value={postData.title}
//       onChange={e => setPostData({ ...postData, title: e.target.value })}
//     />

//     <StyledTextField
//       name="description"
//       label="Description"
//       fullWidth
//       multiline
//       value={postData.description}
//       onChange={e => setPostData({ ...postData, description: e.target.value })}
//     />

//     <StyledTextField
//       name="tags"
//       label="Tags"
//       fullWidth
//       multiline
//       value={postData.tags}
//       onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })}
//     />

//     <br />
//     <br />

//     <FileBase
//       type="file"
//       multiple={false}
//       onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
//     />

//     <br />
//     <br />

//     <StyledButton
//       variant="contained"
//       color="primary"
//       size="medium"
//       fontSize="medium"
//       type="submit"
//       fullWidth
//     >
//       Submit
//     </StyledButton>
//     <br />
//     <br />
//     <Button variant="contained" color="secondary" size="medium" fontSize="medium" onClick={clear}>
//       Clear
//     </Button>
//   </StyledForm>
// );

// const Form = ({ currentId, setCurrentId, modalCloseFn }) => {
//   const { postData, setPostData, clear, handleSubmit } = usePostForm();

//   return (
//     <FormView
//       currentId={currentId}
//       setCurrentId={setCurrentId}
//       modalCloseFn={modalCloseFn}
//       postData={postData}
//       setPostData={setPostData}
//       clear={clear}
//       onSubmitFn={handleSubmit}
//     />
//   );
// };

// export default Form;

////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FileBase from 'react-file-base64';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { create, update } from 'actions/posts.action';
import { useSelector } from 'react-redux';

// import { user } from 'constants/userConstant';

import QuitIcon from 'utils/svg/QuitIcon';

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
