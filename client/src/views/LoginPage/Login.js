import React from 'react';
import LoginForm from 'components/Auth/LoginForm';
import useLogin from './useLogin.hook';

const LoginPage = () => {
  const {
    isSignIn,
    switchMode,
    googleSuccess,
    googleError,
    handleChange,
    handleSubmit,
  } = useLogin();

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
