import { combineReducers } from 'redux';
import postsReducers from './postsReducers';
import usersReducers from './usersReducer';

export default combineReducers({
    posts: postsReducers,
    users: usersReducers
})