import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:8080', 
    headers: {
        'Acess-Control-Allow-Origin': '*',
        'Acess-Control-Allow-Methods': ['GET', 'PUT', 'POST', 'DELETE'],
        'Content-Type': 'application/json'
    }
})

export default instance;