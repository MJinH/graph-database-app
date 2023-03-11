const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sessionRouter = require('./routers/sessionRouter')
const databaseRouter = require('./routers/databaseRouter')
require('dotenv').config()
const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(session({
    secret: 'graph-application',
    secure: true,
    resave: false,
    saveUninitialized: true,
    proxy: true,
}))

app.use(morgan('common'))
app.use(cookieParser())
app.use(express.json())
app.use('/api/graph/*', sessionRouter)
app.use('/api/graph/db', databaseRouter)


process.on('uncaughtException', (error) => {
    console.log(error)
})


module.exports = app