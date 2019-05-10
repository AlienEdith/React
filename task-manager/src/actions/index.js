import db from '../apis/db'

export const Register = (name, email, password) => {
    return async(dispatch) => {
        const response = await db.post('/users', {
            name, email, password
        })
        if(!response.data.error){
            dispatch({
                type: 'REGISTER',
                payload: response.data
            }); 
        } else {
            alert(response.data.error)
        }
    }
}

export const Login = (email, password) => {
    return async(dispatch) => {
        const response = await db.post('/users/login', {
            email, password
        })
        if(!response.data.error){
            dispatch({
                type: 'LOGIN',
                payload: response.data
            }); 
        } else {
            alert(response.data.error)
        }
    }
}

export const Logout = (token) => {
    return async(dispatch) => {
        const response = await db.post('/users/logoutAll', null, 
            { headers: {'Authorization': `Bearer ${token}`} }
            )
        dispatch({
            type: 'LOGOUT',
            payload: response.data
        }); 
    }
}

export const UpdateUserInfo = (token, name, email, password) => {
    return async(dispatch) => {
        const response = await db.patch('/users/me', {
            name, email, password
        }, {
            headers: {'Authorization': `Bearer ${token}`}
        })
        if(!response.data.error){
            dispatch({
                type: 'UPDATE_USER_INFO',
                payload: response.data
            }); 
        } else {
            alert(response.data.error)
        }
    }
}

export const UploadAvatar = (token, file) => {
    return async(dispatch) => {
        const response = await db.post('/users/me/avatar',
            file, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
        })
        dispatch({
            type: 'UPLOAD_AVATAR',
            payload: response.data
        }); 
    }
}

export const getTaskList = (token, sortBy, completed) => {
    return async(dispatch) => {
        const response = await db.get('/tasks',{
            headers: {'Authorization': `Bearer ${token}`},
            params: {
                sortBy, 
                completed
            }
        })
        dispatch({
            type: 'GET_TASKS',
            payload: response.data
        }); 
    }
}

export const addTask = (token, description, time) => {
    return async(dispatch) => {
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
    return async(dispatch) => {
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
    return async(dispatch) => {
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
    return async(dispatch) => {
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