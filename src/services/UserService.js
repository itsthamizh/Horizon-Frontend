import axios from 'axios';

const USER_LIST_URL = "http://localhost:8080/api/v1/users"

class UserService {
    getUsers(){
        return axios.get(USER_LIST_URL);
    }
}

export default new UserService()