import axios from 'axios';

const db = axios.create(
    {
        // baseURL: "https://todoist-yxw-api.herokuapp.com/api"
        // baseURL: "http://localhost:3000/api"
        baseURL: process.env.REACT_APP_API
    }
)

export default db;