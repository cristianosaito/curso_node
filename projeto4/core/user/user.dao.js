const User = require('../../models/user.model')
const encrypting = require('../../util/encrypt')

const createUserDAO = async (body) => {
    let password = await encrypting.encrypt(body.password)

    let newUser = new User({
        name: body.name,
        company: body.company,
        salary: body.salary,
        userName: body.userName,
        password: password,
        email: body.email,
        address: body.address
    })

    return await newUser.save()
}

const readUserDAO = async (id) => {
    return await User.findOne({
        "_id":id
    })
}

const updateUserDAO = async (id,body)=>{
    return await User.findByIdAndUpdate(id,body)
}

const deleteUserDAO = async (id) =>{
    return await User.deleteOne({
        "_id":id
    })
}

const listUserDAO = async ()=>{
    return await User.find()
}

module.exports = {
    createUserDAO,
    readUserDAO,
    updateUserDAO,
    deleteUserDAO,
    listUserDAO
}

