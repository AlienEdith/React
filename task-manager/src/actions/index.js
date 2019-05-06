import db from '../apis/db'

export const Register = (name, email, password) => {
    return async(dispatch, getState) => {
        const response = await db.post('/users', {
            name, email, password
        })
        dispatch({
            type: 'REGISTER',
            payload: response.data
        }); 
    }
}

export const Login = (email, password) => {
    return async(dispatch, getState) => {
        const response = await db.post('/users/login', {
            email, password
        })
        dispatch({
            type: 'LOGIN',
            payload: response.data
        }); 
    }
}

export const getTaskList = (token) => {
    return async(dispatch, getState) => {
        const response = await db.get('/tasks',{
            headers: {'Authorization': `Bearer ${token}`},
            params: {
                sortBy: "time:asc"
            }
        })
        dispatch({
            type: 'GET_TASKS',
            payload: response.data
        }); 
    }
}

export const addTask = (token, description, time) => {
    return async(dispatch, getState) => {
        const response = await db.post('/tasks', 
            { description: description, time: time}, 
            { headers: {'Authorization': `Bearer ${token}`}}
        )
        dispatch({
            type: 'ADD_TASK',
            payload: response.data
        }); 
    }
}

export const deleteTask = (token, id) => {
    return async(dispatch, getState) => {
        const response = await db.delete(`/tasks/${id}`,
            { headers: {'Authorization': `Bearer ${token}`} }
        )
        dispatch({
            type: 'DELETE_TASK',
            payload: response.data
        }); 
    }
}

export const completeTask = (token, id, bool) => {
    return async(dispatch, getState) => {
        const response = await db.patch(`/tasks/${id}`,
            { completed: bool },
            { headers: {'Authorization': `Bearer ${token}`} }
        )
        dispatch({
            type: 'COMPLETE_TASK',
            payload: response.data
        }); 
    }
}

export const updateTask = (token, id, description, time) => {
    return async(dispatch, getState) => {
        const response = await db.patch(`/tasks/${id}`,
            { description: description, time: time },
            { headers: {'Authorization': `Bearer ${token}`} }
        )
        dispatch({
            type: 'UPDATE_TASK',
            payload: response.data
        }); 
    }
}