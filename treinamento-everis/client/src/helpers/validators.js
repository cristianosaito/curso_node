export function isNull(value,param){
    if (!value) {
        throw Error(`param {${param}} expected`)
    } else{
        return true
    }
}

export function validationParams(objs){
    return objs.filter(obj => !obj).length === 0 ? true: false  
}
 