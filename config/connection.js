const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    "todo_app_db",
    "postgres",
    "1234",
    {
        host:'localhost',
        dialect: 'postgres'
    }
)

module.exports = sequelize;