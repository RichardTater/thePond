const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Product: sequelize.define('product', {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull:true
        },
        description:{
            type:DataTypes.STRING({length:1000}),
            allowNull:true
        }
    })
}

//TODO need help with server