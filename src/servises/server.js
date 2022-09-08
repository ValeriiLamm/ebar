import axios from "axios"

// const baseUrl = 'http://localhost:8080/'
const baseUrl = 'https://sensational-arithmetic-a7b9ff.netlify.app'

async function getAllProducts () {
    try {
        const responce = await axios.get(baseUrl + 'products/getAll', {
            headers: {'Access-Control-Allow-Origin': '*'}
        })
        return responce
    }
    catch (err) {
        throw err
    }
}

async function addNewProduct (product) {
    try {
        const responce = await axios.post(baseUrl + 'products/addProduct', product, {
            headers: {'Access-Control-Allow-Origin': '*'}
        })
        return responce
    }
    catch (err) {
        return err
    }
}

async function getSearchData () {
    try {
        const responce = await axios.get(baseUrl + 'products/getSearchData', {
            headers: {'Access-Control-Allow-Origin': '*'}
        })
        return responce
    }
    catch (err) {
        return err
    }
}

async function searchForProducts (product) {
    try {
        const responce = await axios.post(baseUrl + 'products/findProducts', product, {
            headers: {'Access-Control-Allow-Origin': '*'}
        })
        return responce
    }
    catch (err) {
        return err
    }
}

async function getProductById (id) {
    try {
        const responce = await axios.get(baseUrl + id, {
            headers: {'Access-Control-Allow-Origin': '*'}
        })
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