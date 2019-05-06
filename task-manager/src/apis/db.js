import axios from 'axios';

const db = axios.create(
    {
        baseURL: "https://todoist-yxw.herokuapp.com/api"
    }
)

export default db;