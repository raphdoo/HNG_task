var express = require('express');
var Router = express.Router();
const { createUser, getUser, createPost, getPost} = require('../controllers/controller')


/* GET users listing. */
Router
  .route('/')
  .post(createPost)
  .get(getPost)
//   .get(getUser)
//   .post(createUser)





module.exports = Router;
