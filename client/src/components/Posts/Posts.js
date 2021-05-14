import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Post from 'components/Posts/Post/Post';
import { Alert, AlertTitle } from '@material-ui/lab';
import TablePagination from '@material-ui/core/TablePagination';
import usePost from './usePost.hook';

const Posts = ({ setCurrentId, modalOpenFn }) => {
  const { posts, user, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePost();

  return (
    <>
      {!user?.result?.name && (
        <>
          <Alert severity="info">
            <AlertTitle>
              <strong>Tip</strong>
            </AlertTitle>
            Please Sign in to start!
          </Alert>
        </>
      )}

      <br />

      {user?.result?.name && (
        <TablePagination
          labelRowsPerPage={'Posts per page:'}
          component="div"
          count={posts.length}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[2, 10, { label: 'All', value: posts.length }]}
        />
      )}

      {!posts.length ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={2}>
          {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((post, index) => (
            <Grid key={index} item sm={6} xs={12}>
              <Post post={post} setCurrentId={setCurrentId} modalOpenFn={modalOpenFn} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

Posts.propTypes = {
  setCurrentId: PropTypes.func.isRequired,
  modalOpenFn: PropTypes.func.isRequired,
};

export default Posts;
