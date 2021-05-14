import { GET_ALL, CREATE, UPDATE, REMOVE, LIKEONE } from 'constants/actionTypes';
import { PostApi } from 'api';

export const getAll = () => async dispatch => {
  try {
    const { data } = await PostApi.getAll();

    dispatch({
      type: GET_ALL,
      payload: data,
    });
  } catch (err) {
    return err;
  }
};

export const create = post => async dispatch => {
  try {
    const { data } = await PostApi.create(post);

    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (err) {
    return err;
  }
};

export const update = (id, post) => async dispatch => {
  try {
    const { data } = await PostApi.update(id, post);

    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (err) {
    return err;
  }
};

export const remove = id => async dispatch => {
  try {
    await PostApi.remove(id);

    dispatch({
      type: REMOVE,
      payload: id,
    });
  } catch (err) {
    return err;
  }
};

export const likeOne = id => async dispatch => {
  try {
    const { data } = await PostApi.likeOne(id);

    dispatch({
      type: LIKEONE,
      payload: data,
    });
  } catch (err) {
    return err;
  }
};
