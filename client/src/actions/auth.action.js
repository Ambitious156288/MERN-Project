import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

import routes from 'constants/routes';

export const signin = (formData, router) => async dispatch => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push(routes.home);
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async dispatch => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push(routes.home);
  } catch (error) {
    console.log(error);
  }
};
