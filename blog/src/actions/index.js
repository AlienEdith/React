import jsonplaceholder from '../apis/jsonplaceholder'
import _ from 'lodash'

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonplaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
}

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonplaceholder.get('/users/'+id);
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    }    
}

// Overfetching
// 1. Use One Time Memoization
// export const fetchUser = (id) => {
//     return (dispatch) => {
//         _fetchUser(id, dispatch);
//     }    
// }

//  const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonplaceholder.get('/users/'+id);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
//  });
// 2. Action Creator in Action Creator, must in dispatch
export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {  // Redux-thunk, two argument
        await dispatch(fetchPosts());   // wait for this function finished
        // const userIds = _.uniq(_.map(getState().posts, 'userId'))
        // userIds.forEach(id => dispatch(fetchUser(id)));
        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(id => dispatch(fetchUser(id)))
            .value();   // execute
        
    } 
}