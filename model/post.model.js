//importing the mongoose database ORM
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//modelling the leader schema
const PostSchema = new Schema({
    operation_type:{
        type: String,
        required: true,
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
        type:Number,
        required: true,
        default:0
    }
})



const posts = mongoose.model("Post", PostSchema) //creating the model

module.exports = posts //exporting the created model