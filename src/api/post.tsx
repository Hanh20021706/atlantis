import api from './instance';

export const getPosts = () => {
    return api.get('/posts')
}
export const getPost = (_id : string | undefined) => {
    return api.get(`/posts/${_id}`)
}
export const createPost = (data : any) => {
    return api.post('/posts', data)
}
export const removePost = (_id: number) => {
    return api.delete(`/posts/${_id}`)
}
export const updatePost = (_id: string | undefined , data : any) => {
    return api.patch(`/posts/${_id}`, data)
}