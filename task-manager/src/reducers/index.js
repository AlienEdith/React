import { combineReducers } from 'redux';

import AuthReducers from './AuthReducers'
import TaskReducers from './TaskReducers'

export default combineReducers({
    user: AuthReducers,
    tasks: TaskReducers
})    
