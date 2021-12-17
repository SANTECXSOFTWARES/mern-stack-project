const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require('./routes/routes.js');

dotenv.config();
//API Config
const app = express()
const port = process.env.PORT || 5000 
mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("Data base connected...")
});
//Middlewares
app.use(express.json())
app.use(cors())
//API Endpoints
app.use("/", router)
app.listen(port, () => console.log("Server is up and running..."))
