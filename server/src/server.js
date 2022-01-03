const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')
const dotenv = require("dotenv").config({
    path: path.join(__dirname, '.env')
});
require("./config/db")
const router = require('./routes/routes');

//API Config
const app = express()
const port = process.env.PORT || 5000 
//Middlewares
app.use(express.json())
app.use(cors())
//API Endpoints
app.use("/", router)
app.listen(port, () => console.log("Server is up and running..."))
