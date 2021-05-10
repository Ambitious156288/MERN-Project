import { GET_ALL, CREATE, UPDATE, REMOVE, LIKEONE } from 'constants/actionTypes';
import * as api from 'api';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: GET_ALL,
      payload: data,
    });
  } catch (err) {
    console.log(err); // błedy nie logujemy w konsoli
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);

    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, post) => async dispatch => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);

    dispatch({
      type: REMOVE,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const likePost = id => async dispatch => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({
      type: LIKEONE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
