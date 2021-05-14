import { AUTH, LOGOUT } from 'constants/actionTypes';

const initialState = {
  authData: { firstName: '', lastName: '', email: '', password: '' },
  // isSignIn: false,
  loading: true,
  errors: null,
  user: JSON.parse(localStorage.getItem('profile')),
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        authData: action.data,
        // isSignIn: true,
        loading: false,
        errors: null,
      };

    case LOGOUT:
      return {
        ...state,
        authData: null,
        // isSignIn: false,
        loading: false,
        errors: null,
        user: null,
      };

    default:
      return state;
  }
};

export default auth;
