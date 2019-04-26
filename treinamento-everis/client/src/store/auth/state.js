import { GET_TOKEN } from '@/helpers/token'
export const getDefaultState = () =>({
    token: ''
})

export default {
    token: GET_TOKEN() || ''
}