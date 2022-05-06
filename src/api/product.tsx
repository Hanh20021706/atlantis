import api from './instance';

export const getProducts = () => {
    return api.get('/products')
}
export const getProduct = (_id : string | undefined) => {
    return api.get(`/products/${_id}`)
}
export const createProduct = (data : any) => {
    return api.post('/products', data)
}
export const removeProduct = (_id: number) => {
    return api.delete(`/products/${_id}`)
}
export const updateProduct = (_id: string | undefined , data : any) => {
    return api.patch(`/products/${_id}`, data)
}

// export const getAll = () => {
//     const url = "products?_expand=category";
//     return instance.get(url)
    
// }