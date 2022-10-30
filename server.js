const express = require("express")
const cors = require("cors")
const app = express()
var { connectToDatabase } = require("./database")
const config = require("./config")
var usersRouter = require('./routes/user.route');


connectToDatabase()
app.use(express.json())
app.use(cors())

app.use('/', usersRouter);

const port = config.port

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})