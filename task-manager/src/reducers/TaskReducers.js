const TaskReducers = (state=[], action) => {
    switch(action.type){
        case "GET_TASKS":
            return action.payload; 
        case "ADD_TASK":
            return [ ...state, action.payload ];
        case "DELETE_TASK":
            return state.filter(element => element._id !== action.payload._id)
        case "COMPLETE_TASK":
            return state.map(element => element._id === action.payload._id ? action.payload : element)
        case "UPDATE_TASK":
            return state.map(element => element._id === action.payload._id ? action.payload : element)
        default: return state
    } 
}

export default TaskReducers

