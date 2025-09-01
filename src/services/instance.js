import axios from "axios";
import ConfigObj from "../config/config";

const instance = axios.create({
    baseURL: 'https://ecommerce.ibradev.me',
    timeout: 4000,
    headers: {
        "Content-Type": "application/json"
    }
})

export { instance }