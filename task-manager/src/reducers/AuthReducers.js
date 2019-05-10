export const AuthReducers = (state=null, action) => {
    
    switch(action.type){
        case "REGISTER":
            return action.payload;
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return action.payload;
        case "UPDATE_USER_INFO":
            return action.payload;
        case "UPLOAD_AVATAR":
            return action.payload;
        default: return state
    } 
}



