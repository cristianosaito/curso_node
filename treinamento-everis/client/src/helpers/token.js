import { parseJwt } from '@/helpers/jwt'

export const GET_TOKEN = () => {
    const token = localStorage.getItem('token') || undefined
    if (token) {
        return JSON.parse(token)
    } else{
        return undefined
    }
}
export const SET_TOKEN = (token) => localStorage.setItem('token', token ? JSON.stringify(token) : '')
export const PARSET_TOKEN = () => parseJwt(GET_TOKEN())