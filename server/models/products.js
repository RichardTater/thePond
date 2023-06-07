const {DataTypes} = require('sequelize')
// const {sequelize} = require("../util/database")
import { sequelize } from "../util/database"
import { Sequelize } from 'sequelize'

module.exports = {
    Product: sequelize.define('product', {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        imgURL:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
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
