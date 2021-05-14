import axios from 'axios';
import routes from 'constants/routes';

// const API = axios.create({ baseURL: 'http://localhost:5000' });
const API = axios.create({ baseURL: 'https://memorable-events.herokuapp.com' });

API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const PostApi = {
  getAll: () => API.get(routes.posts),
  create: newPost => API.post(routes.posts, newPost),
  update: (id, updatedPost) => API.patch(`${routes.posts}/${id}`, updatedPost),
  remove: id => API.delete(`${routes.posts}/${id}`),
  likeOne: id => API.patch(`${routes.posts}/${id}/${routes.likeOne}`),
};

export const AuthApi = {
  signIn: formData => API.post(routes.signin, formData),
  signUp: formData => API.post(routes.signup, formData),
};
