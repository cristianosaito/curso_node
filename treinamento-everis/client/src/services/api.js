import { 
    instance,
    apiInstance } from './config'

export async function Authenticate({ user, password }) {
    user = user.toLowerCase()
    const { data } = await instance.post('/auth',{ user, password })
    return data
}

export async function Get_Users(){
    const { data } = await apiInstance().get('/users')
    return data
}

export async function Get_User(id){
    const { data } = await apiInstance().get(`/read_user/${id}`)
    return data
}

export async function Update_User({ id, body }){
    const { data } = await apiInstance().put(`/update_user/${id}`, body)
    return data
}

export async function Create_User(body){
    const { data } = await apiInstance().post('/create_user', body)
    return data
}

export async function Delete_User(id){
    const { data } = await apiInstance().delete(`/delete_user/${id}`)
    return data
}