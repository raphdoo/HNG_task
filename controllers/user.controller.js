const mongoose = require("mongoose");
const User = require('../model/user.model')
const bodyParser = require("body-parser")

async function createUser(req, res) {
  let userExist = await User.findOne({ slackUsername: req.body.slackUsername })
  if (userExist) {
      return res.status(403).send("This user already exist!")
  }
  const user = await User.create(req.body)
  res.json({
      user
  })
};

async function getUser (req, res, next) {
    try{
        const user = await User.findOne();
    
        res.setHeader('Content-Type', "application/json")
        res.status(200).send(user)        
    }catch(err){
        res.status(500).json({err:err, status:false})
    }
}


module.exports = {
    createUser,
    getUser
}