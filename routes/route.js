var express = require('express');
var Router = express.Router();
const { createUser, getUser, createPost} = require('../controllers/controller')


/* GET users listing. */
Router
  .route('/')
  .post(createPost)
//   .get(getUser)
//   .post(createUser)





module.exports = Router;
