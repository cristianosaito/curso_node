const express = require('express')
const router = express.Router()
const userAPI = require('./user.api')
//lista todos os usuarios
router.route('/users').get(userAPI.listUsers)

//lista um usuário específico
router.route('/user/:id').get(userAPI.readUser)

//inclui um usuário
router.route('/create_user').post(userAPI.createUser)

//altera um usuário
router.route('/update_user/:id').put(userAPI.updateUser)

//deleta um usuário
router.route('/delete_user/:id').delete(userAPI.deleteUser)

module.exports = router