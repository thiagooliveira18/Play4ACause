import axios from "axios";
import { env } from "process";

const instance = axios.create({
    baseURL: `${env.BASE_URL_BACKEND}${env.PORT_BACKEND}/`, 
    headers: {
        'Acess-Control-Allow-Origin': '*',
        'Acess-Control-Allow-Methods': ['GET', 'PUT', 'POST', 'DELETE'],
        'Content-Type': 'application/json'
    }
})

export default instance;