const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] //тип токена - Bearer, сам токен
        if (!token) {
            return res.status(401).json({message: 'Войдите в учетную запись'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: 'Войдите в учетную запись'})
    }
}