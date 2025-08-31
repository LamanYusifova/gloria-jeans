import ConfigObj from "../config/config";
import { instance } from "./instance"

async function getData() {    
    const res = await instance.get(`/categories/all`);
    return res.data;
}

async function getAllProducts(){
    const res = await instance.get('/products/all')
    return res.data.data
}

async function getSubcategoriesById(id) {
    const res = await instance.get(`/categories/get/${id}`)
    return res.data
}

async function getProdBySubCatId(id) {
    const res = await instance.get(`/products/all?subcategoryId=${id}`)
    return res.data
}

async function getProdForCategory(id) {
    const res = await instance.get(`/products/all?subcategoryId=${id}`);
    return res.data;
}

// async function getProdForDetails(id) {
//     const res = await instance.get(`/products/get/${id}`);
//     return res.data;
// }

export { getData, getAllProducts, getSubcategoriesById, getProdBySubCatId, getProdForCategory }