import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

import routes from 'constants/routes';

// class AuthActions {
//   authUser = () => {
//     dispatch({ type: AUTH, data });
//   };
// }

// const authUser = async formData => {
//   try {
//     // const user = await AuthApi.singIn(formData);
//     const { data } = await api.signIn(formData);
//     // AuthActions.authUser(user);
//     AuthActions.authUser();

//     return true;
//   } catch (err) {
//     return err;
//   }
// };

// // w hooku
// authUser.then(cond => {
//   if (cond) {
//     router.push(routes.home);
//     // localstorage...
//     localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
//   }
// });

////////////////////////////////////

export const signin = (formData, router) => async dispatch => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push(routes.home);
    localStorage.setItem('profile', JSON.stringify({ ...data }));
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async dispatch => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push(routes.home);
    localStorage.setItem('profile', JSON.stringify({ ...data }));
  } catch (error) {
    console.log(error);
  }
};
