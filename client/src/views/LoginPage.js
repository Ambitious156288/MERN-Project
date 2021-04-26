import React, { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import 'components/Auth/OwlAnimation/OwlStyles.css';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signin, signup } from 'actions/auth.action';
import routes from 'constants/routes';

const initialState = { firstName: '', lastName: '', email: '', password: '' };

const LoginPage = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setFormData(initialState);
    setSignIn(prevState => !prevState);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isSignIn) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const googleSuccess = async res => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push(routes.home);
    } catch (err) {
      console.log(err);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful :/');

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <LoginForm
        SignIn={isSignIn}
        switchMode={switchMode}
        googleSuccess={googleSuccess}
        googleError={googleError}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default LoginPage;
