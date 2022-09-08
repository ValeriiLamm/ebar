import axios from "axios"

const baseUrl = 'http://localhost:8080/'

async function getAllProducts () {
    try {
        const responce = await axios.get(baseUrl + 'products/getAll')
        return responce
    }
    catch (err) {
        throw err
    }
}

async function addNewProduct (product) {
    try {
        const responce = await axios.post(baseUrl + 'products/addProduct', product)
        return responce
    }
    catch (err) {
        return err
    }
}

async function getSearchData () {
    try {
        const responce = await axios.get(baseUrl + 'products/getSearchData')
        return responce
    }
    catch (err) {
        return err
    }
}

async function searchForProducts (product) {
    try {
        const responce = await axios.post(baseUrl + 'products/findProducts', product)
        return responce
    }
    catch (err) {
        return err
    }
}

async function getProductById (id) {
    try {
        const responce = await axios.get(baseUrl + id)
        return responce
    }
    catch (err) {
        return err
    }
}

export {getAllProducts, 
        addNewProduct,
        getSearchData,
        searchForProducts,
        getProductById }