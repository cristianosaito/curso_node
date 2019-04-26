export const getDefaultState = () =>({
    token: ''
})

export default {
    token: localStorage.getItem('token') || ''
}