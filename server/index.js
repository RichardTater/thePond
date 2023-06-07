require('dotenv').config()

const express = require('express')
const cors = require('cors')
const session = require('express-session')

const {SERVER_PORT, SECRET} = process.env

//DB imports
const {sequelize} = require('./util/database')
const {Product} = require('./models/products')
const seed = require('./util/seed')
const duckyController = require('./controllers/duckyController')

const app = express()

app.use(express.json())
app.use(cors())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*60*48
    }
}))


app.get("/api/ducks", duckyController.getDucks)
app.delete("/api/ducks/:duckId", duckyController.deleteDuckFromCart)

sequelize
    .sync()
        // .sync({force:true}).then(seed)
    .then(() => app.listen(SERVER_PORT, console.log(`We got a ${SERVER_PORT}! I repeat, WE HAVE A ${SERVER_PORT}!`)))
    .catch(theseHands => console.log(theseHands))
