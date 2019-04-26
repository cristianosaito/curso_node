import { getDefaultState } from './state'

export const mutations = {
    SET_RESET_STATE: 'SET_RESET_STATE',
    SET_USER_LIST: 'SET_USER_LIST',
}
export default{
    [mutations.SET_RESET_STATE]: (state) => Object.assign(state, getDefaultState),
    [mutations.SET_USER_LIST]: (state,payload) => state.list = payload,
}