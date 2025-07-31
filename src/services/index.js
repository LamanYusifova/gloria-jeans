import ConfigObj from "../config/config";
import { instance } from "./instance"

async function getData() {    
    const res = await instance.get();
    return res.data.results;
}

export { getData }