const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')
const dotenv = require("dotenv").config({
    path: path.join(__dirname, '.env')
});
// const router = require('./routes/routes');
const db = require('./models')
//API Config
const app = express()
const port = process.env.PORT || 5000 
//Middlewares
app.use(express.json())
app.use(cors())
//API Endpoints
// app.use("/", router)
db.sequelize.sync().then(()=>{
    app.listen(port, () => console.log(`Server is up and running...${port}`))
})
