import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import routes from 'constants/routes';
import { LOGOUT } from 'constants/actionTypes';

const useNavbar = () => {
  const authUser = useSelector(({ auth }) => auth.user);

  const [user, setUser] = useState(authUser);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logOut = () => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
    history.push(routes.auth);
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return { user, logOut };
};

export default useNavbar;
