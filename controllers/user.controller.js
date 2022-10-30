const mongoose = require("mongoose");
const User = require('../model/user.model')
const bodyParser = require("body-parser")

async function createUser(req, res) {
  const { slackUsername, backend, age, bio } = req.body;
  let userExist = await User.findOne({ slackUsername: slackUsername })
  if (userExist) {
      return res.status(403).send("This user already exist!")
  }
  const newUser = {
      slackUsername,
      backend,
      age,
      bio
  }
  const user = await User.create(newUser)
  res.json({
      user
  })
};
async function getUser (req, res, next) {
    try{
        const user = await User.find({});
        res.status(200).json({
            user
        })        
    }catch(err){
        res.status(500).json({err:err, status:false})
    }
}


module.exports = {
    createUser,
    getUser
}