const express = require("express")
const http = require("http")
const helmet = require("helmet")
const cors = require('cors')
const { corsConfig, expressSession, sessionWrap } = require('./controller/server_controller')

// Importing routes

const authRoute = require('./routes/authRoute.js')

const app = express()

const server = http.createServer(app)

// Using necessary middlewares

app.use(express.json())
app.use(helmet())
app.use(cors(corsConfig))
app.use(expressSession)

// Endpoints

app.use('/auth', authRoute)

server.listen(process.env.SERVER_PORT, ()=>{
    
    console.log(`server running on port: ${process.env.SERVER_PORT}`)
    
})

