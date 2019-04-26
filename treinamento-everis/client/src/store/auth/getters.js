import { parseJwt } from '@/helpers/jwt'

export default{
    getUser: (state) => state.token ? parseJwt(state.token) : '',
    isAuth: (state, getter) => getter.getUser ? true: false
}