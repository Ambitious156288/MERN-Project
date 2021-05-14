import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from 'actions/auth.action';
import routes from 'constants/routes';
import { AUTH } from 'constants/actionTypes';

// const authUser = async ({ router, authState }) => {
//   try {
//     const authedUser = await AuthApi.authUser(authState); // api

//     dispatch(signup(authedUser)); // store

//     localStorage.setItem('profile', JSON.stringify({ ...data })); // localstorage

//     router.push(routes.home); // redirect
//   } catch (err) {
//     return err;
//   }
// };

const useLogin = () => {
  const initialState = useSelector(({ auth }) => auth.authData);

  // const initialState = useSelector(({ auth }) => auth);
  // const isSignIn = useSelector(({ auth }) => auth.isSignIn);

  const [authState, setAuthState] = useState(initialState);
  const [isSignIn, setSignIn] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setAuthState(authState);
    setSignIn(prevState => !prevState);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // authUser({ router: history, authState });

    if (isSignIn) {
      dispatch(signup(authState, history));
    } else {
      dispatch(signin(authState, history));
    }
  };

  const googleSuccess = async res => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    const data = { result, token };

    try {
      dispatch({ type: AUTH, data });
      localStorage.setItem('profile', JSON.stringify({ ...data }));
      history.push(routes.home);
      window.location.reload();
    } catch (err) {
      return err;
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful :/');

  const handleChange = e => setAuthState({ ...authState, [e.target.name]: e.target.value });

  // useEffect(()=>{
  // maybe do a session !!!
  // },[])

  return { isSignIn, switchMode, googleSuccess, googleError, handleChange, handleSubmit };
};

export default useLogin;
