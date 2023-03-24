const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, // название БД
    process.env.DB_USER, // пользователь
    process.env.DB_PASSWORD, // пароль
    {
        dialect: 'postgres', // указываю СУБД
        host: process.env.DB_HOST, // хост
        port: process.env.DB_PORT // порт
    }
)