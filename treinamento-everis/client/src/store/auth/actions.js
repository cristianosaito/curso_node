import { Authenticate } from '@/services/api'
import { SET_TOKEN } from '@/helpers/token'
import { mutations } from './mutations'

export default{
    async Login({ dispatch, getters }, payload){
        try {
            const response = await Authenticate(payload)
            await dispatch('setUserToken', response)
            return getters.getUser  
        } catch (error) {
            await dispatch('Message/setErrorMessage', error.response.data, { root: true })
        }
    },
    logout({ dispatch }){
        dispatch('resetState', null, { root: true })
    },
    async setUserToken({ commit }, payload){
        SET_TOKEN(payload)
        await commit(mutations.SET_USER_INFO, payload)
        return payload
    },
    resetState({ dispatch }){
        dispatch('setUserToken','')
    }
}