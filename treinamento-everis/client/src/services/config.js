import { GET_TOKEN } from '@/helpers/token'
import axios from 'axios'

export const BASE_URL = 'http://localhost:3000/api/'

export const instance = axios.create({
    baseURL: BASE_URL
})

export const apiInstance = () => axios.create({
    baseURL: BASE_URL,
    headers: {
        'x-access-token': GET_TOKEN()
    }
})