require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const {sequelize} = require('./util/database')
const {Product} = require('./models/products')
const seed = require('./util/seed')
const duckyController = require('./controllers/duckyController')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/ducks", duckyController.getDucks)

sequelize
    .sync()
        // .sync({force:true}).then(seed)
    .then(() => app.listen(SERVER_PORT, console.log(`We got a ${SERVER_PORT}! I repeat, WE HAVE A ${SERVER_PORT}!`)))
    .catch(theseHands => console.log(theseHands))
