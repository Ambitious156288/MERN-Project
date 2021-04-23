import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import Post from 'components/Posts/Post/Post';
import { Alert, AlertTitle } from '@material-ui/lab';

import { user } from 'constants/userConstant';

const Posts = ({ setCurrentId, modalOpenFn }) => {
  const posts = useSelector(state => state.posts);

  return (
    <>
      {!posts.length ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={2}>
          {posts.map(post => (
            <Grid key={post._id} item sm={6} xs={12}>
              <Post post={post} setCurrentId={setCurrentId} modalOpenFn={modalOpenFn} />
            </Grid>
          ))}
        </Grid>
      )}

      {!user && (
        <>
          <br />
          <br />

          <Alert severity="info">
            <AlertTitle>
              <strong>Tip</strong>
            </AlertTitle>
            Please Sign in to start!
          </Alert>
        </>
      )}
    </>
  );
};

Posts.propTypes = {
  setCurrentId: PropTypes.func.isRequired,
  modalOpenFn: PropTypes.func.isRequired,
};

export default Posts;
