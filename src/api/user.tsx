import api from './instance';


export const signin = async(data: any) => {
    return api.post('/signin', data)
}
export const signup = async(data: any) => {
    return api.post('/signup', data)
}
