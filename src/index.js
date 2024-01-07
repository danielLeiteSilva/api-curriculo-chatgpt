const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")
const router =  require('./router')
require('dotenv').config()
const app = express()

const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(router)


app.listen(port, () => console.log(`Connected on port ${port}`))