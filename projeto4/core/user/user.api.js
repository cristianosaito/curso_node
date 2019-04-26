const userDAO = require('./user.dao')

const createUser = async (req,res) =>{
    let body = req.body
    
    try {
        let userCreated = await userDAO.createUserDAO(body)
        res.status(201).json(userCreated)
    } catch (error) {
        res.status(500).json(error)
    }
}

const readUser = async (req,res)=>{
    let id = req.params.id
    try {
        let user = await userDAO.readUserDAO(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateUser = async (req,res)=>{
    let id = req.params.id
    let body = req.body
    try {
        let updateUser = await userDAO.updateUserDAO(id,body)
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteUser = async (req,res)=>{
    let id = req.params.id
    try {
        let deletedUser = await userDAO.deleteUserDAO(id)
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const listUsers = async (req,res)=>{
    try {
        let users = await userDAO.listUserDAO()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    listUsers
}