import api from './instance';

export const getCategries = () => {
    return api.get('/categories')
}
export const getCategry = (_id : string | undefined) => {
    return api.get(`/categories/${_id}`)
}
export const createCategry = (data : any) => {
    return api.post('/categories', data)
}
export const removeCategry = (_id: number) => {
    return api.delete(`/categories/${_id}`)
}
export const updateCategry = (_id: string | undefined , data : any) => {
    return api.patch(`/categories/${_id}`, data)
}