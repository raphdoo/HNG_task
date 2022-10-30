//importing the mongoose database ORM
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//modelling the leader schema
const UserSchema = new Schema({
    slackUsername:{
        type: String,
        required: true
    },
    backend:{
        type: Boolean,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    bio:{
        type: String,
        required:true
    }
})



const users = mongoose.model("User", UserSchema) //creating the model

module.exports = users //exporting the created model