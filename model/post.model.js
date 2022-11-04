//importing the mongoose database ORM
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//modelling the leader schema
const postSchema = new Schema({
    operation_type:{
        type: String,
        enum: ["addition", "subtraction", "multiplication"]
    },
    x:{
        type: Number
    },
    y:{
        type: Number
    },
    slackUsername:{
        type: String,
        default: "Raphdoo"
    },
    result:{
        type:Number
    }
})



const posts = mongoose.model("Post", postSchema) //creating the model

module.exports = posts //exporting the created model