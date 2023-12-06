import axios from "axios";


const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_BACKEND, 
    headers: {
        'Acess-Control-Allow-Origin': '*',
        'Acess-Control-Allow-Methods': ['GET', 'PUT', 'POST', 'DELETE'],
        'Content-Type': 'application/json'
    }
})

export default instance;