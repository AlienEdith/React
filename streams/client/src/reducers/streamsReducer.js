import _ from 'lodash';

import {
    LIST_ALL_STREAM,
    GET_ONE_STREAM,
    CREATE_STREAM,
    UPDATE_STREAM,
    DELETE_STREAM
} from '../actions/types';


                        //All streams - { id: {}, id: {} }
const streamsReducers = (state={}, action) => {
    switch(action.type){
        case LIST_ALL_STREAM:
            return { ...state, ..._.mapKeys(action.payload, 'id') };

        case GET_ONE_STREAM:
            return { ...state, [action.payload.id]: action.payload}

        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload}

        case UPDATE_STREAM:
            // const newState = { ...state };
            // newState[action.payload.id] = action.payload;
            // return newState;
            return {...state, [action.payload.id]: action.payload};

        case DELETE_STREAM:
            // lodash library: delete a property(key) from an object
            return _.omit(state, action.payload);

        default:
            return state;
    }
}

export default streamsReducers;