const mongoose = require("mongoose");
const User = require('../model/user.model')
const Post = require('../model/post.model')
const bodyParser = require("body-parser")

async function createPost(req, res) {
    const post = await Post.create(req.body);

  if(post.operation_type == 'addition'){
    post.result = post.x + post.y
  }
  if(post.operation_type == 'subtraction'){
    post.result = post.x - post.y
  }
  if(post.operation_type == 'multiplication'){
    post.result = post.x * post.y
  } 
  await post.save()

  const newPost = await Post.findOne({_id: post._id}).select({ operation_type: 1, _id: 0, slackUsername:1, result:1 })

  res.setHeader('Content-Type', "application/json")
  res.status(201).send(newPost)
}

// async function getPost (req, res, next) {
//         try{
            
//             // const post = await Post.findOne().select({ operation_type: 1, _id: 0, slackUsername:1, result:1 })
        
//             res.setHeader('Content-Type', "application/json")
//             res.status(200).send(post)        
//         }catch(err){
//             res.status(500).json({err:err, status:false})
//         }
// }


// async function createUser(req, res) {
//   let userExist = await User.findOne({ slackUsername: req.body.slackUsername })
//   if (userExist) {
//       return res.status(403).send("This user already exist!")
//   }
//   const user = await User.create(req.body)
//   res.json({
//       user
//   })
// };

// async function getUser (req, res, next) {
//     try{
//         const user = await User.findOne().select({ slackUsername: 1, _id: 0, backend:1, age:1, bio:1 })
    
//         res.setHeader('Content-Type', "application/json")
//         res.status(200).send(user)        
//     }catch(err){
//         res.status(500).json({err:err, status:false})
//     }
// }


module.exports = {
    // createUser,
    // getUser,
    createPost,
//     getPost
}