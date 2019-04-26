import { getDefaultState } from './state'

export const mutations = {
    SET_RESET_STATE: 'SET_RESET_STATE',
    SET_MESSAGE: 'SET_MESSAGE',
    SET_MESSAGE_STATE: 'SET_MESSAGE_STATE',
    SET_MESSAGE_VARIATION: 'SET_MESSAGE_VARIATION'
}
export default{
    [mutations.SET_RESET_STATE]: (state) => Object.assign(state, getDefaultState),
    [mutations.SET_MESSAGE]: (state,payload) => state.message = payload,
    [mutations.SET_MESSAGE_STATE]: (state,payload) => state.active = payload,
    [mutations.SET_MESSAGE_VARIATION]: (state,payload) => state.variation = payload
}