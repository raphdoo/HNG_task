var express = require('express');
var userRouter = express.Router();
const { createUser, getUser} = require('../controllers/user.controller')


/* GET users listing. */
userRouter
  .route('/')
  .get(getUser)
  .post(createUser)





module.exports = userRouter;
