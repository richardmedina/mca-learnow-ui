//import axios from 'axios'
import ApiBase from './Api'

const API_URL = "https://localhost:5001/api";

class Api extends ApiBase {
    apiUrl = undefined
    instance = null;
    token = null
    expiration = null
    username = null
    password = null
    lastAuthSuccesful = false

    constructor (apiUrl){
        this.apiUrl = apiUrl
    }

    isValidAxiosInstance = () => {
        return this.token != null;
    }

    renewToken = () => {

    }

    handleApiErrors = error => {
        if (error.response.status == 401)
        {
            // error.response.data
            // error.response.headers
        }
        console.log ("Handling Error: ", error)
        console.log ("Handling Response: ", error.response)
    }

    getBearerToken = (username, password) => {
        this.username = username
        this.password = password

        axios.post (`${this.apiUrl}/auth/authenticate`, {
            username,
            password
        })
        .then (response => {
            this.token = response.data.token
            this.expiration = response.data.expires

            this.createAxiosInstance()
        })
        .catch(this.handleApiErrors)
    }

    createAxiosInstance = () => {
        this.instance = axios.create({
            baseURL: this.apiUrl,
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
    }

    getUsers = () => {
        if (this.isValidAxiosInstance) { 
            this.createAxiosInstance()
        }

        this.instance.get("/users")
    }

    
}

export default new Api (API_URL);