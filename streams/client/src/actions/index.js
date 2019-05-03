import streams from '../apis/streams'
import { SIGN_IN, SIGN_OUT, 
        LIST_ALL_STREAM, GET_ONE_STREAM, CREATE_STREAM,
        UPDATE_STREAM, DELETE_STREAM } from './types'
import history from '../history';

export const SignIn = (id, name) => {
    return {
        type: SIGN_IN,
        payload: {
            id: id,
            name: name
        }
    }
}

export const SignOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const ListAllStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({
            type: LIST_ALL_STREAM,
            payload: response.data
        })
    }
}

export const GetOneStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({
            type: GET_ONE_STREAM,
            payload: response.data
        })
    }
}

export const CreateStream = (formValues) => {
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', { ...formValues, userId });
        dispatch({
            type: CREATE_STREAM,
            payload: response.data
        })
        // Programmatic Navigation: after create, lead to index page
        // navigate 
        history.push('/');
    }
}

export const UpdateStream = (id, formValues) => {
    return async (dispatch, getState) => {
        // const { userId } = getState().auth;
                                    // only update some properties
        const response = await streams.patch(`/streams/${id}`, formValues );
        dispatch({
            type: UPDATE_STREAM,
            payload: response.data
        })
        history.push('/');
    }
}

export const DeleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({
            type: DELETE_STREAM,
            payload: id
        })
        history.push('/');
    }
}
