import { combineReducers } from 'redux';

import posts from 'reducers/posts.reducer';
import auth from 'reducers/auth.reducer';

const rootReducer = combineReducers({ posts, auth });

export default rootReducer;
