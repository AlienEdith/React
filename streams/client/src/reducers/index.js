import { combineReducers } from 'redux';
import { reducer as fromReducer } from 'redux-form';   // built-in reducer

import AuthReducer from './AuthReducer'
import streamsReducers from './streamsReducer'

export default combineReducers({
    auth: AuthReducer,
    form: fromReducer,  // built-in reducer in redux-form
    streams: streamsReducers
})