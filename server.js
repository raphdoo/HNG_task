const express = require("express")
const cors = require("cors")
const app = express()
var { connectToDatabase } = require("./database")
const config = require("./config")
var Router = require('./routes/route');


connectToDatabase()
app.use(express.json())
app.use(cors({
    origin: '*'
}));

app.use('/', Router);

const port = config.port

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})