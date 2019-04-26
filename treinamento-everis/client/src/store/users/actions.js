import { mutations } from './mutations'
import { GET_TOKEN } from '@/helpers/token'
import { 
    Get_Users,
    Create_User,
    Delete_User,
    Get_User,
    Update_User, 
} from '@/services/api'
import { get } from 'lodash'

export default{
    async getUsers({ commit, dispatch }){
        try {
            const list = await Get_Users()
            commit(mutations.SET_USER_LIST,list)
        } catch (err) {
            let nonAuth = get(err,'response.status')
            console.error(err)
            if (GET_TOKEN() && nonAuth === 401) {
                setTimeout(() => {
                    location.href = '/logout'
                }, 2000);
                dispatch('Message/setErrorMessage', 'Desculpe sua sessão expirou 😅', { root: true })
            }
        }
    },
    async getUser({}, payload){
        const user = await Get_User(payload)
        return user
    },
    async createUser({ dispatch }, payload){
        try {
            const newUser = await Create_User(payload)
            return newUser
        } catch (error) {
            await dispatch('Message/setErrorMessage', 'Ops !! Something has wrong', { root: true })
        }
    },
    async updateUser({ dispatch }, payload){
        try {
            const updatedUser = await Update_User(payload)
            return updatedUser
        } catch (error) {
            console.error(error)
            await dispatch('Message/setErrorMessage', 'Ops !! Something has wrong', { root: true })
        }
    },
    async deleteUser({ dispatch }, payload){
        try {
            const deletedUser = await Delete_User(payload)
            await dispatch('getUsers')
            return deletedUser
        } catch (error) {
            console.error(error)
            await dispatch('Message/setErrorMessage', 'Ops !! Something has wrong', { root: true })
        }
    },
    resetState({ commit }){
        commit(mutations.SET_RESET_STATE)
    }
}