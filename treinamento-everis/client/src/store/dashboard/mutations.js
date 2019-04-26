export const mutations = {
    SET_USER_INFO: 'SET_USER_INFO'
}
export default{
    [mutations.SET_USER_INFO]: (state, payload) => state.token = payload
}