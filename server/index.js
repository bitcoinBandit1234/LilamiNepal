const express = require("express")
const http = require("http")
const cors = require('cors')
const { corsConfig, expressSession, sessionWrap } = require('./controller/server_controller')
const { Server } = require("socket.io");

// Importing routes

const authRoute = require('./routes/authRoute.js');
const productRoute = require('./routes/productRoute.js'); 

const app = express();

const server = http.createServer(app);

// Using necessary middlewares

app.use(express.json());
app.use(cors(corsConfig));
app.use("/auctionImg", express.static("auctionImg"));
app.use(expressSession);

// socket.io configuration

const io = new Server(server,  {cors: corsConfig});

io.on("connection", (socket) => {
  
});

// Endpoints

app.use('/auth', authRoute);

server.listen(process.env.SERVER_PORT, ()=>{
    
    console.log(`server running on port: ${process.env.SERVER_PORT}`)
    
})

