const {sequelize} = require('./database')
const {Product} = require('../models/products')

let starterProducts = [
    {
        name:"regular",
        price:0.99,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Nunc lobortis mattis aliquam faucibus purus. Et malesuada fames ac turpis egestas. Ut tellus elementum sagittis vitae et leo duis ut. Vitae congue eu consequat ac. Odio eu feugiat pretium nibh ipsum consequat nisl vel. A diam sollicitudin tempor id eu. Turpis nunc eget lorem dolor. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Ut ornare lectus sit amet. Malesuada pellentesque elit eget gravida cum sociis natoque. Et ligula ullamcorper malesuada proin. Tristique et egestas quis ipsum suspendisse ultrices gravida. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.",
    },
    {
        name:"pirate",
        price:0.98,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Nunc lobortis mattis aliquam faucibus purus. Et malesuada fames ac turpis egestas. Ut tellus elementum sagittis vitae et leo duis ut. Vitae congue eu consequat ac. Odio eu feugiat pretium nibh ipsum consequat nisl vel. A diam sollicitudin tempor id eu. Turpis nunc eget lorem dolor. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Ut ornare lectus sit amet. Malesuada pellentesque elit eget gravida cum sociis natoque. Et ligula ullamcorper malesuada proin. Tristique et egestas quis ipsum suspendisse ultrices gravida. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.",
    },
    {
        name:"the rock",
        price:0.97,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Nunc lobortis mattis aliquam faucibus purus. Et malesuada fames ac turpis egestas. Ut tellus elementum sagittis vitae et leo duis ut. Vitae congue eu consequat ac. Odio eu feugiat pretium nibh ipsum consequat nisl vel. A diam sollicitudin tempor id eu. Turpis nunc eget lorem dolor. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Ut ornare lectus sit amet. Malesuada pellentesque elit eget gravida cum sociis natoque. Et ligula ullamcorper malesuada proin. Tristique et egestas quis ipsum suspendisse ultrices gravida. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.",
    },
    {
        name:"ghost",
        price:0.96,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Nunc lobortis mattis aliquam faucibus purus. Et malesuada fames ac turpis egestas. Ut tellus elementum sagittis vitae et leo duis ut. Vitae congue eu consequat ac. Odio eu feugiat pretium nibh ipsum consequat nisl vel. A diam sollicitudin tempor id eu. Turpis nunc eget lorem dolor. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Ut ornare lectus sit amet. Malesuada pellentesque elit eget gravida cum sociis natoque. Et ligula ullamcorper malesuada proin. Tristique et egestas quis ipsum suspendisse ultrices gravida. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.",
    },
    {
        name:"zombie",
        price:0.95,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Nunc lobortis mattis aliquam faucibus purus. Et malesuada fames ac turpis egestas. Ut tellus elementum sagittis vitae et leo duis ut. Vitae congue eu consequat ac. Odio eu feugiat pretium nibh ipsum consequat nisl vel. A diam sollicitudin tempor id eu. Turpis nunc eget lorem dolor. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Ut ornare lectus sit amet. Malesuada pellentesque elit eget gravida cum sociis natoque. Et ligula ullamcorper malesuada proin. Tristique et egestas quis ipsum suspendisse ultrices gravida. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.",
    },
    {
        name:"skeleton",
        price:0.94,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et ultrices. Nunc lobortis mattis aliquam faucibus purus. Et malesuada fames ac turpis egestas. Ut tellus elementum sagittis vitae et leo duis ut. Vitae congue eu consequat ac. Odio eu feugiat pretium nibh ipsum consequat nisl vel. A diam sollicitudin tempor id eu. Turpis nunc eget lorem dolor. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Ut ornare lectus sit amet. Malesuada pellentesque elit eget gravida cum sociis natoque. Et ligula ullamcorper malesuada proin. Tristique et egestas quis ipsum suspendisse ultrices gravida. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.",
    },
]

const seed = async() => {
    await Product.bulkCreate(starterProducts)
    console.log("Database Seeded ;D")
}

module.exports = seed