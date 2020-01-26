//import axios from 'axios'
import Api from './Api'

const API_URL = "https://localhost:5001/api";

class LearnowApi extends Api {
    constructor (apiUrl) {
        super(apiUrl)

        this.auth = {
            authenticate: (username, password) =>
                this.post(`/auth/authenticate`, {
                    username,
                    password
                })
        }
    }

}

export default new LearnowApi (API_URL);