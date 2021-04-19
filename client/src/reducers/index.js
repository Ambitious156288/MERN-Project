import { combineReducers } from 'redux';

import posts from 'reducers/posts.reducer';
import auth from 'reducers/auth.reducer';

export default combineReducers({ posts, auth });
