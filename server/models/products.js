const {DataType} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Products: sequelize.define('Products')
}

//Will need help
//TODO server setup at 28:55