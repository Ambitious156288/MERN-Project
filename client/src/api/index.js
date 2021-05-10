import axios from 'axios';
import routes from 'constants/routes';

// const API = axios.create({ baseURL: 'http://localhost:5000' });
const API = axios.create({ baseURL: 'https://memorable-events.herokuapp.com/' });

API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

class PostApi {
  getAll = async () => API.get(routes.posts);
  create = async newPost => API.post(routes.posts, newPost);
  update = async (id, updatedPost) => API.patch(`${routes.posts}/${id}`, updatedPost);
  remove = async id => API.delete(`${routes.posts}/${id}`);
  likeOne = async id => API.patch(`${routes.posts}/${id}/${routes.posts}`);
}

class AuthApi {
  signIn = async formData => API.post(routes.signin, formData);
  signUp = async formData => API.post(routes.signup, formData);
}

export { AuthApi, PostApi };
