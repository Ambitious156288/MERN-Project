import { GET_ALL, CREATE, UPDATE, REMOVE, LIKEONE } from 'constants/actionTypes';

const posts = (state = [], action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload;

    case CREATE:
      return [...state, action.payload];

    case UPDATE:
    case LIKEONE:
      return state.map(post => (post._id === action.payload._id ? action.payload : post));

    case REMOVE:
      return state.filter(post => post._id !== action.payload);

    default:
      return state;
  }
};

export default posts;
