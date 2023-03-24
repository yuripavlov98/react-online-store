require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')

const PORT = process.env.PORT || 5000

const app = express()

// запускаю сервер
const start = async () => {
    try {
        await sequelize.authenticate() // аутентификация
        await sequelize.sync() // сверяет бд со схемой данных
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()