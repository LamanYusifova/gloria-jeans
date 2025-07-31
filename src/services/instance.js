import axios from "axios";
import ConfigObj from "../config/config";

const instance = axios.create({
    baseURL: ConfigObj.baseUrl,
    timeout: 4000,
    headers: {
        "Content-Type": "application/json"
    }
})

export { instance }