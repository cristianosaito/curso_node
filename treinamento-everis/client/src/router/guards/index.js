export function authUser(to, from, next){
    const isAuthUser = localStorage.getItem('token') ? true : false
    if (isAuthUser) {
        next()
    }else{
        next({ name: 'Login' })
    }
}