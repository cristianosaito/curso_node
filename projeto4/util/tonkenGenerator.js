const jwt = require('jsonwebtoken')

const tokenGenerator = (payload)=>{
    try {
        let token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" })
        return token
    } catch (error) {
        console.log(error);
    }
}

const tokenValidator = (token)=>{
    if(!token) throw new Error("token inválido!")

    return jwt.verify(token, process.env.SECRET)
}

module.exports = {
    tokenGenerator,
    tokenValidator
}