import { AUTH } from '../constants/actionTypes';
import { AuthApi } from 'api';
import routes from 'constants/routes';

const AuthAction = (data, dispatch) => {
  dispatch({ type: AUTH, data });
};

const AuthRules = (data, router) => {
  router.push(routes.home);
  localStorage.setItem('profile', JSON.stringify({ ...data }));
};

export const signin = (formData, router) => async dispatch => {
  try {
    const { data } = await AuthApi.signIn(formData);
    AuthAction(data, dispatch);

    AuthRules(data, router);
    window.location.reload();
  } catch (err) {
    return err;
  }
};

export const signup = (formData, router) => async dispatch => {
  try {
    const { data } = await AuthApi.signUp(formData);
    AuthAction(data, dispatch);

    AuthRules(data, router);
  } catch (err) {
    return err;
  }
};
