import axios from 'axios'
import https from 'https'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default class {
    apiUrl = ""
    client = null

    constructor(apiUrl)
    {
        this.initialize(apiUrl)
    }

    initialize = (apiUrl) => {
        this.apiUrl = apiUrl
        this.client = axios.create({
            baseURL: this.apiUrl,
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
              })
            // headers: {
            //     Authorization: `Bearer ${this.token}`
            // }
        });
    }

    setHeaders = (headers) => {
        console.log("HEADERS: ", this.client.defaults.headers)

        this.client.defaults.headers = {
            ...this.client.defaults.headers,
            headers
        }

        console.log("NEWHEADERS: ", this.client.defaults.headers)
    }

    get = (url, config = null) =>
        this.client.get(url, config);

    post = (url, data = null, config= null) =>
        this.client.post(url, data, config)

    put = (url, data, config = null) =>
        this.client.put(url, data, config)

    delete = (url, data, config) =>
        this.client.delete(url, data, config)
}
