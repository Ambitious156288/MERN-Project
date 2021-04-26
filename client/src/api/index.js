import axios from 'axios';
import routes from 'constants/routes';
import { user } from 'constants/userConstant';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use(req => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }

  return req;
});

export const fetchPosts = () => API.get(routes.posts);
export const createPost = newPost => API.post(routes.posts, newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = id => API.delete(`/posts/${id}`);
export const likePost = id => API.patch(`/posts/${id}/likePost`);

export const signIn = formData => API.post(routes.signin, formData);
export const signUp = formData => API.post(routes.signup, formData);
